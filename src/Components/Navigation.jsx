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
    <header className="sticky top-0 -left-5 w-full z-50 p-4 lg:px-12 lg:py-6 flex items-center justify-between bg-zinc-900">
      <Logo />
      <nav
        className={`bg-zinc-50/50 backdrop-blur-lg absolute top-0 -left-full z-40 h-svh w-fit transition-all duration-300 ${
          isNavOpen ? "left-0" : ""
        } lg:relative lg:left-0 lg:h-auto lg:w-auto lg:bg-transparent`}
      >
        <NavLinks handleClick={handleLinkClick} />
      </nav>
      <NavButton
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
        className="absolute sm:top-6 top-5 right-3 lg:hidden"
      />
    </header>
  );
}

export default Navigation;
