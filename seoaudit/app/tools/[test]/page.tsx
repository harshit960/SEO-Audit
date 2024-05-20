'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const searchParams = useSearchParams()

  const search = searchParams.get('test')

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return (
    <>
      <div className="h-screen w-full">
ajk
      </div>

    </>
  )
}