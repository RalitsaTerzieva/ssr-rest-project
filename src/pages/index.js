import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  const usersReq = await axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    props: {
      users: usersReq.data 
    }
  }
}


function HomePage({ users }) {
 
  return (
    <>
      <ul>
      {users.map((user) => (
          <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                  {`${user.username}`}
              </Link>
          </li>
      ))}
  </ul>
   <Link href="/joke">
     Get a Random Joke
 </Link>
 </>
  )
}

export default HomePage;