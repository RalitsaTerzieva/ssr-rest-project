import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps(ctx) {
    const { username } = ctx.query;
    const userReq = await axios.get(`https://api.github.com/users/${username}`)

    return {
        props: {
            user: userReq.data
        }
    }
}

function UserPage({ user }) {
    return (
        <>
        <div>
            <Link href="/" passHref>
                Back to home
            </Link>
        </div>
        <hr />
        <div style={{ display: 'flex'}}>
            <img src={user.avatar_url} alt={user.login} width={150} height={150}/>
        </div>
        </>
    )
}

export default UserPage;