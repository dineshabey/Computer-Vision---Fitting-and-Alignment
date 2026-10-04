type ContactFormShellProps = {
  fields: string[];
  submitLabel: string;
};

export function ContactFormShell({ fields, submitLabel }: ContactFormShellProps) {
  return (
    <form className="grid gap-4">
      {fields.map((field) => (
        <label key={field} className="grid gap-2 text-sm font-medium text-slate-300">
          <span>{field}</span>
          <input className="h-12 rounded-xl border border-white/10 bg-white/5 px-3 text-white outline-none transition-colors focus:border-secondary" />
        </label>
      ))}
      <button className="h-12 rounded-xl bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-blue-500" type="button">
        {submitLabel}
      </button>
    </form>
  );
}
