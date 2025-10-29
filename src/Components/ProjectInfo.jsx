const ProjectInfo = ({ project }) => {
  return (
    <div className="absolute bottom-90 left-8 z-10 bg-white/20 bg-opacity-20 backdrop-blur-md px-6 py-8 rounded-md shadow-lg">
      <h1 className="text-3xl md:text-5xl font-light tracking-widest mb-1 transition-all duration-500 text-zinc-50">
        {project.title}
      </h1>
      <p className="text-base md:text-lg lg:text-xl tracking-wide opacity-80 text-zinc-100">
        {project.description}
      </p>
      {/* <Link to=""></Link> */}
    </div>
  );
};
export default ProjectInfo;
