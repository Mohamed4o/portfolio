<div className="flex space-x-3">
  {index === 0 ? (
    <>
      {/* أول مشروع - الأزرار شغالة */}
      <a
        href="https://bookin-on.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white text-sm hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
      >
        <ExternalLink className="w-4 h-4" />
        <span>View</span>
      </a>
      <a
        href="https://github.com/Mohamed4o/bookin-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-sm hover:bg-gray-700 hover:border-gray-500 transition-all duration-300"
      >
        <Github className="w-4 h-4" />
        <span>Code</span>
      </a>
    </>
  ) : (
    <>
      {/* باقي المشاريع - الأزرار موجودة بس مش شغالة */}
      <button
        disabled
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white text-sm opacity-60 cursor-not-allowed"
      >
        <ExternalLink className="w-4 h-4" />
        <span>View</span>
      </button>
      <button
        disabled
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-300 text-sm opacity-60 cursor-not-allowed"
      >
        <Github className="w-4 h-4" />
        <span>Code</span>
      </button>
    </>
  )}
</div>
