import { useMemo } from 'react';
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

let uri = 'https://rwnjssignbook.herokuapp.com/v1/graphql';
let apolloClient;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({ uri }),
        cache: new InMemoryCache()
})
}