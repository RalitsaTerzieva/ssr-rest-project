import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps(context) {
    const { id } = context.query;

    try {
        const userReq = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        
        if (!userReq.data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                user: userReq.data,
            },
        };
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return {
            notFound: true,
        };
    }
}

function UserPage({ user }) {
    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <>
            <div>
                <Link href="/" passHref>
                    Back to home
                </Link>
            </div>
            <hr />
            <div style={{ display: 'flex' }}>
                <img src={`https://via.placeholder.com/150`} alt={`${user.name}`} width={150} height={150} />
                <div>
                    <p>Full Name: {`${user.name}`}</p>
                    <p>ID: {user.id}</p>
                    <p>Email: {user.email}</p>
                    <p>Location: {user.address.city}, {user.address.country}</p>
                </div>
            </div>
        </>
    );
}

export default UserPage;
