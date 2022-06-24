import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4qnn3jc00fe01z3fi9077fr/master',
    cache: new InMemoryCache()
})