export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-10 space-y-3">
          <div className="h-8 w-72 bg-stone-200/70 rounded animate-pulse" />
          <div className="h-4 w-96 bg-stone-200/50 rounded animate-pulse" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-[#e8dfcd] p-4 space-y-4 animate-pulse"
            >
              <div className="aspect-square bg-stone-100 rounded" />
              <div className="space-y-2">
                <div className="h-3 w-20 bg-stone-200 rounded" />
                <div className="h-5 w-48 bg-stone-200 rounded" />
                <div className="h-3 w-36 bg-stone-100 rounded" />
              </div>
              <div className="pt-2 flex justify-between items-center border-t border-stone-100">
                <div className="h-5 w-20 bg-stone-200 rounded" />
                <div className="h-4 w-12 bg-stone-100 rounded" />
              </div>
              <div className="h-9 w-full bg-stone-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

