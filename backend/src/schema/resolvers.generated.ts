/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { link as Query_link } from './link/resolvers/Query/link';
import    { links as Query_links } from './link/resolvers/Query/links';
import    { user as Query_user } from './user/resolvers/Query/user';
import    { users as Query_users } from './user/resolvers/Query/users';
import    { addLink as Mutation_addLink } from './link/resolvers/Mutation/addLink';
import    { addTag as Mutation_addTag } from './tag/resolvers/Mutation/addTag';
import    { deleteLink as Mutation_deleteLink } from './link/resolvers/Mutation/deleteLink';
import    { Link } from './link/resolvers/Link';
import    { Tag } from './tag/resolvers/Tag';
import    { User } from './user/resolvers/User';
import    { DateTime } from './base/resolvers/DateTime';
    export const resolvers: Resolvers = {
      Query: { link: Query_link,links: Query_links,user: Query_user,users: Query_users },
      Mutation: { addLink: Mutation_addLink,addTag: Mutation_addTag,deleteLink: Mutation_deleteLink },
      
      Link: Link,
Tag: Tag,
User: User,
DateTime: DateTime
    }