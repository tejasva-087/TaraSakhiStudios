const HeroDisplay = ({ project }) => {
  console.log(project);
  return (
    <div className="h-svh w-screen ">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
        loading="eager"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60" />
    </div>
  );
};

export default HeroDisplay;
