import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo'
import Header from './components/Header';
import Lesson from './components/Lesson';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import Event from './pages/Event';



const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons {
      id
      title
      description
    }

   
  }

`
interface Lesson {
  id: string;
  title: string;
}

function App() {

 

  return (
    <div>
      <Event />
    </div>
  )
}

export default App
