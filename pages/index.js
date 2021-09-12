import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css';

import axios from 'axios';

export default function Home(props) {
  console.log(props.data.data.user)
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-gray-800 font-bold text-6xl">hello</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const getData = await axios ({
    method: 'GET',
    url: 'http://localhost:4000/graphql',
    data: {
      query: `
        query {
          user(userID: "1") {
            id
          }
        }
      `
    }
  });

  const data = getData.data
  
  return {
    props: {
      data
    }
  }
}