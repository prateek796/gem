import { cn } from "@/lib/cn";
import type { Cut, GemPalette } from "@/lib/types";

type GemPlateProps = {
  palette: GemPalette;
  cut?: Cut;
  name: string;
  caption?: string;
  size?: "sm" | "md" | "lg" | "hero";
  className?: string;
  glow?: boolean;
};

const view = { sm: "h-44", md: "h-64", lg: "h-[28rem]", hero: "h-[min(78vh,40rem)]" };

export function GemPlate({
  palette,
  cut = "oval",
  name,
  caption,
  size = "md",
  className,
  glow = true,
}: GemPlateProps) {
  const uid = name.replace(/[^a-z0-9-]+/gi, "").toLowerCase() || "gem";
  return (
    <figure
      className={cn(
        "relative overflow-hidden bg-ink",
        view[size],
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 42%, ${palette.deep} 0%, #0c0b0a 72%)`,
        }}
      />
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-[38%] h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
          glow && "gem-glow",
        )}
        style={{ background: palette.mid, opacity: 0.28 }}
      />
      <svg
        viewBox="0 0 200 220"
        className="relative z-10 mx-auto h-full w-auto max-w-[78%] drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        role="img"
        aria-label={`${name} study`}
      >
        <defs>
          <linearGradient id={`${uid}-body`} x1="30%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor={palette.light} />
            <stop offset="42%" stopColor={palette.mid} />
            <stop offset="100%" stopColor={palette.deep} />
          </linearGradient>
          <linearGradient id={`${uid}-glint`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.spark} stopOpacity="0.85" />
            <stop offset="40%" stopColor={palette.spark} stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`${uid}-core`} cx="42%" cy="34%" r="55%">
            <stop offset="0%" stopColor={palette.spark} stopOpacity="0.55" />
            <stop offset="55%" stopColor={palette.mid} stopOpacity="0.2" />
            <stop offset="100%" stopColor={palette.deep} stopOpacity="0" />
          </radialGradient>
        </defs>
        <CutShape cut={cut} fill={`url(#${uid}-body)`} />
        <CutShape cut={cut} fill={`url(#${uid}-core)`} />
        <Facets cut={cut} color={palette.spark} />
        <CutShape cut={cut} fill={`url(#${uid}-glint)`} />
      </svg>
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 px-5 py-4 text-[0.65rem] uppercase tracking-[0.18em] text-ivory/55">
          <span>{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}

function CutShape({ cut, fill }: { cut: Cut; fill: string }) {
  switch (cut) {
    case "emerald":
      return (
        <polygon
          fill={fill}
          points="55,40 145,40 170,70 170,150 145,180 55,180 30,150 30,70"
        />
      );
    case "round":
      return <polygon fill={fill} points={brilliantPoints()} />;
    case "pear":
      return (
        <path
          fill={fill}
          d="M100 28 C138 28 168 78 168 118 C168 168 128 196 100 196 C72 196 32 168 32 118 C32 78 62 28 100 28 Z"
        />
      );
    case "cushion":
      return (
        <path
          fill={fill}
          d="M58 38 H142 C162 38 172 52 172 72 V148 C172 168 162 182 142 182 H58 C38 182 28 168 28 148 V72 C28 52 38 38 58 38 Z"
        />
      );
    case "cabochon":
      return (
        <ellipse fill={fill} cx="100" cy="112" rx="62" ry="74" />
      );
    case "marquise":
      return (
        <path
          fill={fill}
          d="M100 24 C150 70 168 100 168 112 C168 124 150 154 100 196 C50 154 32 124 32 112 C32 100 50 70 100 24 Z"
        />
      );
    case "princess":
      return <rect fill={fill} x="42" y="42" width="116" height="136" />;
    default:
      return (
        <ellipse fill={fill} cx="100" cy="110" rx="58" ry="78" />
      );
  }
}

function Facets({ cut, color }: { cut: Cut; color: string }) {
  const stroke = { stroke: color, strokeOpacity: 0.28, fill: "none", strokeWidth: 0.6 };

  if (cut === "cabochon") {
    return (
      <ellipse
        cx="88"
        cy="88"
        rx="22"
        ry="16"
        fill={color}
        fillOpacity="0.18"
      />
    );
  }

  if (cut === "emerald") {
    return (
      <g {...stroke}>
        <polygon points="55,40 145,40 170,70 30,70" />
        <polygon points="30,70 170,70 170,150 30,150" />
        <polygon points="30,150 170,150 145,180 55,180" />
        <line x1="55" y1="40" x2="55" y2="180" />
        <line x1="145" y1="40" x2="145" y2="180" />
        <rect x="62" y="78" width="76" height="64" />
      </g>
    );
  }

  if (cut === "round") {
    return (
      <g {...stroke}>
        <polygon points={brilliantPoints()} />
        <polygon points="100,70 128,92 100,118 72,92" />
        {Array.from({ length: 8 }, (_, i) => {
          const a = (Math.PI * 2 * i) / 8 - Math.PI / 2;
          return (
            <line
              key={i}
              x1="100"
              y1="112"
              x2={100 + Math.cos(a) * 68}
              y2={112 + Math.sin(a) * 68}
            />
          );
        })}
      </g>
    );
  }

  return (
    <g {...stroke}>
      <line x1="100" y1="34" x2="100" y2="186" />
      <line x1="42" y1="110" x2="158" y2="110" />
      <line x1="58" y1="52" x2="142" y2="168" />
      <line x1="142" y1="52" x2="58" y2="168" />
      <ellipse cx="100" cy="110" rx="28" ry="22" />
    </g>
  );
}

function brilliantPoints(): string {
  const pts: string[] = [];
  for (let i = 0; i < 16; i++) {
    const a = (Math.PI * 2 * i) / 16 - Math.PI / 2;
    const r = i % 2 === 0 ? 72 : 64;
    pts.push(`${100 + Math.cos(a) * r},${112 + Math.sin(a) * r}`);
  }
  return pts.join(" ");
}
