export default function SocialIcon({ src, alt }) {
  return (
    <a
      href="#"
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md transition hover:bg-white/15"
    >
      <img src={src} alt={alt} className="h-4 w-4 opacity-80" />
    </a>
  );
}
