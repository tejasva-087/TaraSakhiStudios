function NavButton({ isOpen, setIsOpen, className }) {
  const defaultClass =
    "w-8 h-0.5 bg-zinc-50 rounded-xl transition-all duration-300";

  function handleClick() {
    setIsOpen((val) => !val);
  }

  return (
    <button
      className={`space-y-1 p-2 cursor-pointer ${className}`}
      onClick={handleClick}
      style={{ zIndex: 9999 }}
    >
      <div
        className={`${defaultClass} ${
          isOpen ? "rotate-45 translate-y-1.5" : ""
        }`}
      ></div>
      <div
        className={`${defaultClass} ${isOpen ? "opacity-0" : "opacity-100"}`}
      ></div>
      <div
        className={`${defaultClass} ${
          isOpen ? "-rotate-45 -translate-y-1.5" : ""
        }`}
      ></div>
    </button>
  );
}

export default NavButton;
