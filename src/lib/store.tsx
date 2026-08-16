"use client";

import type { Product } from "@/lib/types";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type CartItem = { productId: string; quantity: number };

type Store = {
  cart: CartItem[];
  wishlist: string[];
  compare: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  toggleCompare: (productId: string) => void;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
};

const StoreContext = createContext<Store | null>(null);

type Snapshot = {
  cart: CartItem[];
  wishlist: string[];
  compare: string[];
  cartOpen: boolean;
  searchOpen: boolean;
};

const listeners = new Set<() => void>();

const empty: Snapshot = {
  cart: [],
  wishlist: [],
  compare: [],
  cartOpen: false,
  searchOpen: false,
};

let snapshot: Snapshot = empty;
let hydrated = false;

function parseList(raw: string | null): string[] {
  if (!raw) return [];
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

function parseCart(raw: string | null): CartItem[] {
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  snapshot = {
    cart: parseCart(localStorage.getItem("kalpa.cart")),
    wishlist: parseList(localStorage.getItem("kalpa.wishlist")),
    compare: parseList(localStorage.getItem("kalpa.compare")),
    cartOpen: false,
    searchOpen: false,
  };
}

function getClientSnapshot(): Snapshot {
  hydrate();
  return snapshot;
}

function getServerSnapshot(): Snapshot {
  return empty;
}

function emit(next: Snapshot) {
  snapshot = next;
  if (typeof window !== "undefined") {
    localStorage.setItem("kalpa.cart", JSON.stringify(next.cart));
    localStorage.setItem("kalpa.wishlist", JSON.stringify(next.wishlist));
    localStorage.setItem("kalpa.compare", JSON.stringify(next.compare));
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  hydrate();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const state = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const addToCart = useCallback((product: Product) => {
    if (product.availability !== "available") return;
    const already = snapshot.cart.some((item) => item.productId === product.id);
    emit({
      ...snapshot,
      cart: already
        ? snapshot.cart
        : [...snapshot.cart, { productId: product.id, quantity: 1 }],
      cartOpen: true,
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    emit({
      ...snapshot,
      cart: snapshot.cart.filter((item) => item.productId !== productId),
    });
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    const current = snapshot.wishlist;
    emit({
      ...snapshot,
      wishlist: current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    });
  }, []);

  const toggleCompare = useCallback((productId: string) => {
    const current = snapshot.compare;
    if (current.includes(productId)) {
      emit({
        ...snapshot,
        compare: current.filter((id) => id !== productId),
      });
      return;
    }
    if (current.length >= 3) return;
    emit({ ...snapshot, compare: [...current, productId] });
  }, []);

  const setCartOpen = useCallback((open: boolean) => {
    if (snapshot.cartOpen === open) return;
    emit({ ...snapshot, cartOpen: open });
  }, []);

  const setSearchOpen = useCallback((open: boolean) => {
    if (snapshot.searchOpen === open) return;
    emit({ ...snapshot, searchOpen: open });
  }, []);

  const value = useMemo(
    () => ({
      cart: state.cart,
      wishlist: state.wishlist,
      compare: state.compare,
      cartOpen: state.cartOpen,
      searchOpen: state.searchOpen,
      addToCart,
      removeFromCart,
      toggleWishlist,
      toggleCompare,
      setCartOpen,
      setSearchOpen,
    }),
    [
      state,
      addToCart,
      removeFromCart,
      toggleWishlist,
      toggleCompare,
      setCartOpen,
      setSearchOpen,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
