import SkeletonCard from '@/components/SkeletonCard'
import React from 'react'

const loading = () => {
  return (
    <main>
        <div className='grid grid-cols-3 gap-8'>
            {"abcdefghi".split('').map(i => (
                <SkeletonCard key={i}></SkeletonCard>
            ))}
        </div>
    </main>
    
  )
}

export default loading