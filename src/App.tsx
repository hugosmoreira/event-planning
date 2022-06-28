import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo'
import Header from './components/Header';
import Lesson from './components/Lesson';
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import Event from './pages/Event';
import Router from './components/Router';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';



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
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
