function WorkDetails({ details }) {
  return (
    <div>
      {Object.entries(details).map(([key, value], index) => (
        <div key={index} className="mb-2 gap-2">
          <h2 className="text-stone-400 font-medium inline">{key}: </h2>
          <p className="text-stone-300 font-light inline">{value}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkDetails;
