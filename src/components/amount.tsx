import { useState } from "react";
import { formatAmount, type AmountUnit } from "@/lib/hw/address-check";
import { useStudio } from "@/store/studio";
import { useT } from "@/lib/use-t";
import { numberLocale } from "@/lib/i18n";

export function AmountText({
  btc,
  className,
}: {
  btc: number;
  className?: string;
}) {
  const { locale } = useT();
  const unit = useStudio((s) => s.amountUnit);
  const [exact, setExact] = useState(false);
  const f = formatAmount(btc, unit, numberLocale(locale));
  return (
    <button
      type="button"
      className={className ?? "tabular-nums"}
      title={f.exact}
      aria-label={f.exact}
      onClick={() => setExact((v) => !v)}
    >
      {exact ? f.exact : f.label}
    </button>
  );
}

export function AmountUnitSwitch() {
  const { t } = useT();
  const unit = useStudio((s) => s.amountUnit);
  const setAmountUnit = useStudio((s) => s.setAmountUnit);
  const opts: { id: AmountUnit; label: string }[] = [
    { id: "btc", label: t("wallet.unitBtc") },
    { id: "sats", label: t("wallet.unitSats") },
    { id: "auto", label: t("wallet.unitAuto") },
  ];
  return (
    <div role="group" aria-label={t("wallet.unit")} className="flex shrink-0 flex-wrap gap-1">
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={unit === o.id}
          onClick={() => setAmountUnit(o.id)}
          className={
            unit === o.id
              ? "h-8 rounded-full bg-primary px-2.5 text-2xs text-primary-foreground"
              : "h-8 rounded-full border border-border px-2.5 text-2xs text-fg-muted hover:bg-muted hover:text-fg"
          }
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
