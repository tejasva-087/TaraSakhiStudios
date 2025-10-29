const ProgressIndicators = ({ total, activeIndex, onSelect }) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-1 transition-all duration-300 ${
            index === activeIndex
              ? "w-12 bg-white"
              : "w-6 bg-white/40 hover:bg-white/60"
          }`}
        />
      ))}
    </div>
  );
};
export default ProgressIndicators;
