import React from 'react'
import Skeleton from './skeleton'

export default function SkeletonCard() {
  return (
    <div>
        <Skeleton className='h-12 w-12 rounded-full mt-4'/>
        <Skeleton className='h-4 w-[250px] mt-4'/>
        <Skeleton className='h-4 w-[200px] mt-4'/>
    </div>
  )
}
