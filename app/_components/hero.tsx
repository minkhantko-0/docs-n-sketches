import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { Autour_One } from "next/font/google";

const autour = Autour_One({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: "400",
  style: "normal",
});

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

          <br />

          <p className="sm:text-xl/relaxed ">
            All in one markdown editor with support for sketching and diagrams
            for engineering teams.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant={"outline"}
              size={"lg"}
              className="border-slate-500 border-2 hover:text-slate-500"
              style={autour.style}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
