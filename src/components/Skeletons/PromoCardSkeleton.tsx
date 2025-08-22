export default function PromoCardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex flex-col w-full rounded-[8px] overflow-hidden">
          <div className="p-6 bg-gray-100 h-full animate-pulse">
            <div className="flex justify-between items-center mb-[12px]">
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
              <div className="h-6 w-[100px] bg-gray-300 rounded"></div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-[100px] bg-gray-300 rounded"></div>
                </div>
                <div className="h-4 w-[120px] bg-gray-300 rounded"></div>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-[80px] bg-gray-300 rounded"></div>
                </div>
                <div className="h-4 w-[100px] bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="mt-[16px] pt-[16px] border-t border-dashed border-gray-300">
              <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
