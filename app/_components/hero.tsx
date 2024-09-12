import { Metadata } from "next";
import { Autour_One } from "next/font/google";

const autour = Autour_One({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "400",
  style: "normal",
});

export const metaData: Metadata = {
  title: "Docs & Sketches",
  description: "Document your vision, sketch your ideas",
};

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Document Your Vision,
            <span
              className="font-extrabold text-slate-500 sm:block mt-2"
              style={autour.style}
            >
              Sketch Your Ideas
            </span>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-secondary shadow hover:text-secondary/20 focus:outline-none focus:ring active:text-secondary/25 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
