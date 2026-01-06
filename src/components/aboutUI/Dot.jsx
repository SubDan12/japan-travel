export default function Dot({ y }) {
  return (
    <div className="absolute left-65" style={{ top: y }}>
      <div className="relative h-3 w-3 -translate-x-1/2 rounded-full bg-white/80">
        <div className="absolute -inset-2 rounded-full border border-white/25" />
      </div>
    </div>
  );
}
