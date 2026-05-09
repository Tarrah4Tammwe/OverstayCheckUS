'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function SuccessContent() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Check Complete</h1>
        <p className="text-gray-600 mb-6">
          Your overstay status has been checked. Review the results above or contact UK Visas & Immigration for official guidance.
        </p>
        <a href="/" className="text-blue-600 hover:underline">
          Check another status →
        </a>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
