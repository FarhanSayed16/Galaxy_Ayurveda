export default function ProductDetailLoading() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left image skeleton */}
          <div className="aspect-square bg-white border border-[#e8dfcd] rounded-lg p-8 animate-pulse flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-stone-100 rounded" />
          </div>

          {/* Right details skeleton */}
          <div className="space-y-6 animate-pulse">
            <div className="h-4 w-28 bg-stone-200 rounded" />
            <div className="h-9 w-3/4 bg-stone-200 rounded" />
            <div className="h-4 w-full bg-stone-100 rounded" />
            <div className="h-4 w-2/3 bg-stone-100 rounded" />
            <div className="h-20 bg-stone-100 rounded-lg p-4" />
            <div className="h-12 w-full bg-stone-200 rounded" />
            <div className="h-10 w-full bg-stone-100 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

