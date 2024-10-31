import { useEffect, useState } from 'react';
import axios from 'axios';

const JokePage = () => {
    const [joke, setJoke] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const response = await axios.get('https://v2.jokeapi.dev/joke/Programming');
                const data = response.data;

                if (data.type === 'single') {
                    setJoke(data.joke);
                  } else if (data.type === 'twopart') {
                    setJoke(`${data.setup} - ${data.delivery}`);
                  }
            } catch (error) {
                setError('Failed to show joke.');
                console.error('Error fetching joke:', err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchJoke();
    }, []);
    
    if (isLoading) return <p>Is Loading...</p>;
    if (error) return <p>Error: {error}</p>;    
    
    return (
        <>
        <h1>Random Joke</h1>
        <p>{joke}</p>
        </>
    )

}

export default JokePage;