import { Email } from "./Email";
import { Footer } from "./Footer";
import { SocialMedias } from "./SocialMedias";
import { Title } from "./Title";

export function Contact() {
  return (
    <section className="h-full w-auto pt-8 px-16 flex-col justify-around">
      <Title />
      <SocialMedias />
      <Email />
      <Footer />
    </section>
  );
}
