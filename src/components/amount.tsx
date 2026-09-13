import { useState, type ReactNode } from "react";
import { Bitcoin } from "lucide-react";
import { formatAmount, formatBtc, type AmountUnit } from "@/lib/hw/address-check";
import { useStudio } from "@/store/studio";
import { useT } from "@/lib/use-t";
import { numberLocale } from "@/lib/i18n";

function SatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <rect x="2" y="1.5" width="20" height="4.2" />
      <rect x="2" y="8.4" width="20" height="4.2" />
      <rect x="2" y="15.3" width="20" height="4.2" />
      <rect x="9.6" y="19.5" width="4.8" height="3.5" />
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
