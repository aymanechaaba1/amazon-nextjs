function LoadingProductPage() {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-10 px-3">
      <div className="w-52 h-52 bg-gray-100 rounded-lg" />

      <div className="flex flex-col flex-1 gap-3">
        <div className="w-52 h-5 bg-gray-100 rounded-lg" />
        <div className="w-48 h-5 bg-gray-100 rounded-lg" />
        <div className="w-32 h-5 bg-gray-100 rounded-lg" />
      </div>
    </div>
  );
}

export default LoadingProductPage;
