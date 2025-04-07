import { Header } from "./sections/header";
import { Projects } from "./sections/projects";
import { Services } from "./sections/services";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#16181D] scroll-smooth">
      <Header />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-2 bg-[#292C34] border-2 border-[#292C34] hover:border-blue-400  hover:text-blue-400 rounded-full hover:cursor-pointer"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
