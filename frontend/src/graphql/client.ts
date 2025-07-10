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
        uri: "http://localhost:3000/graphql",
      });
    }

    return this.instance;
  }
}
