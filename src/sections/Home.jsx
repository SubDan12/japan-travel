import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Included from "../components/Included";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />

        <div className="relative -mt-18 overflow-hidden pt-18">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/footer.jpg"
              alt=""
              className="h-full w-full object-cover"
            />

            {/* very light base overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* long blend from black section above (removes boundary) */}
            <div className="absolute inset-x-0 top-0 h-105 bg-linear-to-b from-black via-black/55 to-transparent" />

            {/* bottom fade for footer readability */}
            <div className="absolute inset-x-0 bottom-0 h-60 bg-linear-to-t from-black/45 to-transparent" />
          </div>

          <div className="relative z-10">
            <Included />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
