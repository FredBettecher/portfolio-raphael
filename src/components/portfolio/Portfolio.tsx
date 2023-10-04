import { Galleries } from "./Galleries";
import { Highlights } from "./Highlights";
import { Title } from "./Title";

export function Portfolio() {
  return (
    <section className="py-8 h-full w-auto text-justify px-16">
      <Title />
      <Highlights />
      <Galleries />
    </section>
  );
}
