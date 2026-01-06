export default function Label({ side = "left", y, days, city }) {
  const isLeft = side === "left";

  return (
    <div
      className={[
        "absolute text-white/70",
        isLeft ? "right-68.75 text-right" : "left-68.75 text-left",
      ].join(" ")}
      style={{ top: y }}
    >
      <p className="text-[12px]">{days}</p>
      <p className="text-[16px] font-semibold text-white/85">{city}</p>
    </div>
  );
}
