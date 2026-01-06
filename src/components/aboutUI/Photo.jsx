export default function Photo({ src, size = "md" }) {
  const cls =
    size === "sm"
      ? "h-[70px] w-[95px]"
      : size === "md"
      ? "h-[85px] w-[130px]"
      : "h-[95px] w-[145px]";

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/15 bg-white/5 ${cls}`}
    >
      <img src={src} alt="" className="h-full w-full object-cover opacity-95" />
    </div>
  );
}
