import { cn } from "@/lib/utils";

type Tone = "copper" | "teal" | "neutral";

const toneDot: Record<Tone, string> = {
  copper: "bg-primary",
  teal: "bg-teal",
  neutral: "bg-muted-foreground",
};

const toneText: Record<Tone, string> = {
  copper: "text-primary",
  teal: "text-teal",
  neutral: "text-muted-foreground",
};

/**
 * A small section label styled like a labeled node on a schematic / signal
 * trace: a dot, a short lead-in line, and a mono uppercase tag. Repeated
 * identically at the top of every section, the way a real schematic repeats
 * its component symbols.
 */
export function NodeEyebrow({
  children,
  tone = "copper",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-2 w-2 shrink-0 rounded-full", toneDot[tone])} />
      <span className={cn("h-[1px] w-10 shrink-0", toneDot[tone])} />
      <span
        className={cn(
          "font-mono text-xs tracking-[0.2em] uppercase",
          toneText[tone]
        )}
      >
        {children}
      </span>
    </div>
  );
}

/**
 * Decorative oscilloscope-style trace used once, in the hero. Two views of
 * the *same* signal: a digital/quantized step trace, and a smoothed analog
 * reconstruction of it — sharing the same baseline and the same transition
 * points, just rounded instead of right-angled. Echoes the digital-vs-analog
 * waveform views he actually reads in GTKWave.
 */
export function Waveform({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Digital / quantized step trace — drawn faint, behind. */}
      <path
        d="M0 48 H40 V16 H72 V80 H104 V48 H192 V16 H224 V80 H256 V48 H352 V24 H384 V72 H416 V48 H480"
        stroke="var(--teal)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* Smooth analog reconstruction — same baseline (48), same transition
          points and peak levels as the digital trace above, just rounded.
          Drawn solid, in front. */}
      <path
        d="M0,48 L40,48
           C48,48 48,16 56,16 C64,16 64,48 72,48
           C80,48 80,80 88,80 C96,80 96,48 104,48
           L192,48
           C200,48 200,16 208,16 C216,16 216,48 224,48
           C232,48 232,80 240,80 C248,80 248,48 256,48
           L352,48
           C360,48 360,24 368,24 C376,24 376,48 384,48
           C392,48 392,72 400,72 C408,72 408,48 416,48
           L480,48"
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}