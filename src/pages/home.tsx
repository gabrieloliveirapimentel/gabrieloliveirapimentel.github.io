import { Header } from "./sections/header";
import { Projects } from "./sections/projects";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";

export function Home() {
  return (
    <div className="min-h-screen bg-[#16181D] scroll-smooth">
      <Header />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
