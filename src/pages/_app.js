import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../../lib/apollo';
import Head from 'next/head';

export default function App({ Component, pageProps}) {
  const apolloClient = useApollo(pageProps.initialApolloState || {});

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
      <link href="https://unpkg.com/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
