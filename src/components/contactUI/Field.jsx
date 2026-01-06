export default function Field({
  name,
  placeholder,
  multiline = false,
  required,
}) {
  const base =
    "w-full bg-transparent text-[13px] text-white/80 placeholder:text-white/40 outline-none";
  const wrap =
    "rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-md";

  if (multiline) {
    return (
      <div className={wrap}>
        <textarea
          name={name}
          rows={3}
          placeholder={placeholder}
          required={required}
          className={`${base} resize-none`}
        />
      </div>
    );
  }

  return (
    <div className={wrap}>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        className={base}
      />
    </div>
  );
}
