import { Title } from "./Title";
import { Videos } from "./Videos";
import { Texts } from "./Texts";
import { CallToAction } from "./CallToAction";

export function Services() {
  return (
    <section className="pt-8 h-full w-auto bg-[#1a1a1a] text-justify px-16">
      <Title />
      <Videos />
      <Texts />
      <CallToAction />
    </section>
  );
}
