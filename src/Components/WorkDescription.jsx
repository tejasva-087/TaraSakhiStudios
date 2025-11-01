function WorkDescription({ paragraphs }) {
  return (
    <div className="text-base text-stone-300 font-light mb-4 space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default WorkDescription;
