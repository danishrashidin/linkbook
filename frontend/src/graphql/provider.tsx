"use client"
import { ApolloProvider } from "@apollo/client"
import { GQLClient } from "./client"
import { PropsWithChildren } from "react"
export function GraphQLProvider({ children }: PropsWithChildren) {
    const client = GQLClient.getInstance()
    return ApolloProvider({
        children,
        client
    })
}