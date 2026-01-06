export default function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-5">
      <div className="h-px w-20 bg-white/25 sm:w-30 md:w-45" />
      <h2 className="text-center text-[26px] font-semibold tracking-[0.18em] text-white/70 sm:text-[30px] md:text-[44px] md:tracking-[0.22em]">
        {title}
      </h2>
      <div className="h-px w-20 bg-white/25 sm:w-30 md:w-45" />
    </div>
  );
}
