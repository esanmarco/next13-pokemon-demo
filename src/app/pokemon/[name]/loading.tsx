export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-row justify-start h-full space-x-5 animate-pulse">
        <div className="bg-gray-300 rounded-md w-28 h-28"></div>
        <div className="flex flex-col flex-1 space-y-3">
          <div className="w-full h-6 bg-gray-300 rounded-md md:w-30"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md md:w-48"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md md:w-16"></div>
          <div className="w-full h-4 bg-gray-300 rounded-md md:w-56"></div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 animate-pulse">
        <div className="w-16 h-4 mt-5 bg-gray-300 rounded-md"></div>
        <div className="w-full h-24 mt-5 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
}
