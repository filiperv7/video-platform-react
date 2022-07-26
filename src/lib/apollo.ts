import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sfwt69224x01wba3wmb7nn/master',
  cache: new InMemoryCache()
})