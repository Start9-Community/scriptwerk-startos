import { useState, type ReactNode } from "react";
import { Bitcoin } from "lucide-react";
import { formatAmount, formatBtc, type AmountUnit } from "@/lib/hw/address-check";
import { useStudio } from "@/store/studio";
import { useT } from "@/lib/use-t";
import { numberLocale } from "@/lib/i18n";

function SatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M17 7.5c0-2-1.8-3.5-5-3.5H8.5" />
      <path d="M8.5 4v16" />
      <path d="M12.5 4v16" />
      <path d="M8.5 12h4c3.2 0 5 1.5 5 3.5S15.7 19 12.5 19H8.5" />
    </svg>
  );
}

function UnitGlyph({ kind, className = "size-3.5" }: { kind: "btc" | "sats"; className?: string }) {
  return kind === "sats" ? <SatsIcon className={className} /> : <Bitcoin className={className} />;
}

export function AmountText({
  btc,
  className,
  coins,
}: {
  btc: number;
  className?: string;
  coins?: boolean;
}) {
  const { locale } = useT();
  const unit = useStudio((s) => s.amountUnit);
  const [exact, setExact] = useState(false);
  const loc = numberLocale(locale);
  const f = coins
    ? {
        text: formatBtc(btc),
        kind: "btc" as const,
        exact: formatAmount(btc, "btc", loc).exact,
      }
    : formatAmount(btc, unit, loc);
  return (
    <button
      type="button"
      className={`inline-flex items-center gap-1 tabular-nums ${className ?? ""}`}
      title={f.exact}
      aria-label={f.exact}
      onClick={() => setExact((v) => !v)}
    >
      {exact ? (
        f.exact
      ) : (
        <>
          <span>{f.text}</span>
          <UnitGlyph kind={f.kind} />
        </>
      )}
    </button>
  );
}

export function AmountUnitSwitch() {
  const { t } = useT();
  const unit = useStudio((s) => s.amountUnit);
  const setAmountUnit = useStudio((s) => s.setAmountUnit);
  const opts: { id: AmountUnit; label: string; icon: ReactNode }[] = [
    { id: "btc", label: t("wallet.unitBtc"), icon: <Bitcoin className="size-3.5" /> },
    { id: "sats", label: t("wallet.unitSats"), icon: <SatsIcon className="size-3.5" /> },
    { id: "auto", label: t("wallet.unitAuto"), icon: null },
  ];
  return (
    <div role="group" aria-label={t("wallet.unit")} className="flex shrink-0 flex-wrap gap-1">
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={unit === o.id}
          aria-label={o.label}
          title={o.label}
          onClick={() => setAmountUnit(o.id)}
          className={
            unit === o.id
              ? "inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2.5 text-2xs text-primary-foreground"
              : "inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-border px-2.5 text-2xs text-fg-muted hover:bg-muted hover:text-fg"
          }
        >
          {o.icon ?? o.label}
        </button>
      ))}
    </div>
  );
}
