function WorkDescription({ paragraphs }) {
  return (
    <div className="text-base text-stone-300 font-light mb-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default WorkDescription;
