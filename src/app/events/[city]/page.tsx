import EventsList from '@/components/events-list'
import H1 from '@/components/h1'
import { EventoEvent } from '@/lib/types'
import { sleep } from '@/lib/util'
import React, { Suspense } from 'react'
import Loading from './loading'
type EventsPageProps = {
  params : {
    city : string
  } 
}
export default async function MyPage({params}:EventsPageProps) {
  const city = params.city;
  const modCity = city.charAt(0).toUpperCase() + city.slice(1);
  

  return (
    <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'> 
      <H1 className='mb-28'>
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${modCity}`}
      </H1>

      <Suspense fallback={<Loading/>}>
        <EventsList city={city}/>
      </Suspense>
      
    </main>
  )
}
