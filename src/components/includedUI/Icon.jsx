export default function Icon({ type }) {
  const base = "h-4 w-4 text-white/80";

  if (type === "guide")
    return (
      <svg
        className={base}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeWidth="1.5" d="M12 6v12m6-6H6" />
      </svg>
    );

  if (type === "flight")
    return (
      <svg
        className={base}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeWidth="1.5" d="M10 21l2-7 7-2-7-2-2-7-2 7-7 2 7 2 2 7z" />
      </svg>
    );

  if (type === "transfer")
    return (
      <svg
        className={base}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeWidth="1.5" d="M3 12h18M3 12l4-4M3 12l4 4" />
      </svg>
    );

  if (type === "hotel")
    return (
      <svg
        className={base}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeWidth="1.5"
          d="M4 20V10a2 2 0 012-2h12a2 2 0 012 2v10M4 14h16"
        />
      </svg>
    );

  return null;
}
