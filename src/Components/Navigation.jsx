import { useState } from "react";
import Logo from "./ui/Logo";
import NavButton from "./ui/NavButton";
import NavLinks from "./ui/NavLinks";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleLinkClick() {
    setIsNavOpen(false);
  }

  return (
    <header className="relative p-4 lg:px-12 lg:py-6 flex items-center justify-between">
      <Logo />
      <nav
        className={`bg-zinc-50/80 backdrop-blur-xl absolute top-0 -left-full z-40 h-svh w-full sm:w-[80%] md:w-[60%] transition-all duration-300 ${
          isNavOpen ? "left-0" : ""
        } lg:relative lg:left-0 lg:h-auto lg:w-auto lg:bg-transparent`}
      >
        <NavLinks handleClick={handleLinkClick} />
      </nav>
      <NavButton
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
        className="absolute top-6 right-3 lg:hidden"
      />
    </header>
  );
}

export default Navigation;
