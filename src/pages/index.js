import { useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
  const usersReq = await axios.get('https://api.github.com/users')

  return {
    props: {
      users: usersReq.data
    }
  }
}



function HomePage({ users }) {
  console.log(users)
  return (
    <ul>
    {users.map((user) => (
      <li key={user.id}>
        <Link href={`/users/${user.login}`}>
          {user.login}
        </Link>
      </li>
    ))}
  </ul>
  )
}

export default HomePage;