function LoadingSearch() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* @ts-ignore */}
      {[...Array(10).keys()].map((i) => (
        <div key={i} className="p-3 rounded-lg border space-y-2">
          <div className="w-32 h-32 border rounded-lg bg-gray-100" />
          <div className="w-48 h-5 bg-gray-100 rounded-lg" />
          <div className="w-32 h-3 bg-gray-100 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export default LoadingSearch;
