import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Video from '../components/Video'
import { useParams } from 'react-router-dom'





interface Params {
  slug: string;
}



const Event = () => {

  const {slug} = useParams<{slug: string}>()
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex flex-1'>
            { slug ? <Video lessonSlug={slug} /> : <div className='' />}
            <Sidebar />
        </main>
    </div>
  )
}

export default Event