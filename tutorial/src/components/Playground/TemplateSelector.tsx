import { TEMPLATES } from './constants';

interface TemplateSelectorProps {
  onSelect: (code: string) => void;
}

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  return (
    <select
      title="template-select"
      className="pg-template-select"
      value=""
      onChange={(e) => {
        const tpl = TEMPLATES.find((t) => t.label === e.target.value);
        if (tpl) onSelect(tpl.code);
      }}
    >
      <option value="" disabled>
        Templates
      </option>
      {TEMPLATES.map((t) => (
        <option key={t.label} value={t.label}>
          {t.label}
        </option>
      ))}
    </select>
  );
}
