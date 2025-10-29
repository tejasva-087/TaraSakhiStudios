const CarouselItem = ({ project, index, activeIndex, onClick }) => {
  const isActive = index === activeIndex;

  return (
    <div
      onClick={onClick}
      className={`relative shrink-0 h-38 cursor-pointer transition-all duration-500 ${
        isActive
          ? "scale-105 shadow-2xl ring-2 ring-white/50"
          : "scale-95 opacity-70 hover:opacity-90"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        draggable="false"
        loading="eager"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 text-zinc-50">
        <h3 className="text-sm tracking-widest font-light">{project.title}</h3>
      </div>
      {isActive && (
        <div className="absolute inset-0 border-2 border-white/30 pointer-events-none" />
      )}
    </div>
  );
};
export default CarouselItem;
