import SkeletonCard from '@/components/UI/SkeletonCard'
import React from 'react'

export default function loading() {
    return (
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px]"    >

                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
    )
}
