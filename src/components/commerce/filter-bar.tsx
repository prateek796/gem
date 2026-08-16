"use client";

import { getAllSpecies } from "@/lib/catalog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const colours = ["red", "blue", "green", "purple", "yellow", "white", "pink"];
const treatments = ["none", "heat", "oil"];
const origins = ["natural", "lab-grown"];

export function FilterBar() {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const [open, setOpen] = useState(false);
  const species = getAllSpecies();

  const active = useMemo(() => {
    const keys = ["gem", "color", "originType", "treatment", "available"];
    return keys.filter((key) => params.get(key)).length;
  }, [params]);

  function set(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (!value || next.get(key) === value) next.delete(key);
    else next.set(key, value);
    const q = next.toString();
    router.push(q ? `${path}?${q}` : path, { scroll: false });
  }

  function clear() {
    router.push(path, { scroll: false });
  }

  return (
    <div className="border-y border-ink/10">
      <div className="flex items-center justify-between py-4">
        <button type="button" className="caption lg:hidden" onClick={() => setOpen((v) => !v)}>
          Filters{active ? ` · ${active}` : ""}
        </button>
        <p className="caption hidden lg:block">Refine</p>
        {active ? (
          <button type="button" className="caption" onClick={clear}>
            Clear
          </button>
        ) : (
          <span />
        )}
      </div>
      <div className={open ? "block pb-6" : "hidden pb-6 lg:block"}>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <Group label="Gemstone">
            {species.map((stone) => (
              <Chip
                key={stone.id}
                label={stone.name}
                active={params.get("gem") === stone.id}
                onClick={() => set("gem", stone.id)}
              />
            ))}
          </Group>
          <Group label="Colour">
            {colours.map((color) => (
              <Chip
                key={color}
                label={color}
                active={params.get("color") === color}
                onClick={() => set("color", color)}
              />
            ))}
          </Group>
          <Group label="Origin">
            {origins.map((item) => (
              <Chip
                key={item}
                label={item === "lab-grown" ? "Laboratory" : "Natural"}
                active={params.get("originType") === item}
                onClick={() => set("originType", item)}
              />
            ))}
          </Group>
          <Group label="Treatment">
            {treatments.map((item) => (
              <Chip
                key={item}
                label={item === "none" ? "None disclosed" : item}
                active={params.get("treatment") === item}
                onClick={() => set("treatment", item)}
              />
            ))}
          </Group>
          <Group label="Availability">
            <Chip
              label="Available now"
              active={params.get("available") === "1"}
              onClick={() => set("available", "1")}
            />
          </Group>
        </div>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="caption mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "border border-ink bg-ink px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-ivory"
          : "border border-ink/15 px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-stone-dark hover:border-ink/40"
      }
    >
      {label}
    </button>
  );
}
