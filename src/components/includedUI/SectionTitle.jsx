export default function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <h2 className="text-[26px] font-semibold tracking-[0.18em] text-white/80 sm:text-[30px] md:text-[44px] md:tracking-[0.22em]">
        {title}
      </h2>
      <div className="h-px flex-1 bg-white/25" />
    </div>
  );
}
