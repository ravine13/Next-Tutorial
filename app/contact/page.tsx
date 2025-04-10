import Link from 'next/link'
import React from 'react'

function page() {
  return (
       <div>
      <h1 className="text-7xl">contact Page</h1>
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8">back home</Link>
    </div>
 
  )
}

export default page
