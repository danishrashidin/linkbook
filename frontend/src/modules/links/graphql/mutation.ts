import { gql } from "@apollo/client";

export const AddLinkQuery = gql`
  mutation AddLink($url: String!, $context: String!) {
    addLink(input: { url: $url, context: $context }) {
      id
      title
      url
      context
      createdAt
      createdById
    }
  }
`;
