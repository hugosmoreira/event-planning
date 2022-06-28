import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Event from '../pages/Event'

type Props = {}

const Router = (props: Props) => {
  return (
    <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        <Route path="/event/" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  )
}

export default Router