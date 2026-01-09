import ProductDetails from '@/components/ProductDetails'
import React from 'react'

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function page({ params }: ProductPageProps) {
  return (
    <div>
      <ProductDetails params={params} />
    </div>
  )
}
