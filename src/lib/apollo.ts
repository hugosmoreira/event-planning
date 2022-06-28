import { ApolloClient, DefaultOptions , InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {


    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };
  
  

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4qnn3jc00fe01z3fi9077fr/master',
    cache: new InMemoryCache()
})