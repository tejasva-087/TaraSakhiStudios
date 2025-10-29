const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="text-2xl font-light tracking-widest animate-pulse">
        LOADING...
      </div>
    </div>
  );
};

export default LoadingScreen;
