import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 h-full flex flex-col animate-pulse">
      
      {/* Image skeleton */}
      <div className="relative h-72 bg-gray-200">
        {/* Status badge skeleton */}
        <div className="absolute top-4 right-4 h-6 w-20 bg-gray-300 rounded-lg" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title */}
        <div className="h-5 w-3/4 bg-gray-300 rounded mb-3" />

        {/* Description lines */}
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gray-200 rounded" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>

        {/* Button */}
        <div className="mt-auto">
          <div className="h-10 w-full bg-gray-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
