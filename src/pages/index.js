import { useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { initApollo } from './../../lib/apollo/index';
import GET_LATEST_SIGNS from './../../lib/apollo/queries/getLatestSigns';
import axios from 'axios';
import Sign from '@/components/Sign';

export async function getServerSideProps() {
  const usersReq = await axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    props: {
      users: usersReq.data,
     
    }
  }
}


function HomePage() {
  const { loading, data } = useQuery(GET_LATEST_SIGNS, {
    fetchPolicy: 'no-cache',
  });
  
  if (loading) {
    return <>Loading</>
  }
  
  
  return (
    <>
    <div className="flex justify-center items-center flex-col mt-20">
      <h1 className="text-3xl mb-5">Real-World Next.js signbook</h1>
      <Link href="/new-sign">
        <button className="mb-8 border-2 border-purple-800 text-purple-900 p-2 rounded-lg text-gray-50 m-auto mt-4">
          Add new sign
        </button>
      </Link>
      <div>
        {data.sign?.map((sign) => (
          <Sign key={sign.uuid} {...sign} />
        ))}
      </div>
    </div>

    
    <Link href="/joke">Get a Random Joke</Link>
    </>
  )
}

export default HomePage;