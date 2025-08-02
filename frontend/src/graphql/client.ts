import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export class GQLClient {
  private static instance: ApolloClient<NormalizedCacheObject> | null = null;

  public static getInstance() {
    if (!this.instance) {
      const cache = new InMemoryCache();
      this.instance = new ApolloClient({
        cache,
        uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
      });
    }

    return this.instance;
  }
}
