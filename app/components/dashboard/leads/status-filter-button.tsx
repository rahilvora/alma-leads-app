import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function StatusFilterButton() {
  return (
    <div>
      <button className="flex items-center gap-2 rounded-md bg-white-100 px-4 py-2 text-sm border border-gray-300 font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
        {/* Using flex and items-center to align text and icon horizontally */}
        <span>Status</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>
    </div>
  )
}