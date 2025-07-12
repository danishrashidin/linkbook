import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./schema/typeDefs.generated";
import { resolvers } from "./schema/resolvers.generated";

configDotenv();

const PORT = process.env.PORT || 3000;

(async function init() {
  const app = express();

  app.use(cors());

  /* GQL */
  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await gqlServer.start();

  app.use("/graphql", express.json(), expressMiddleware(gqlServer));

  app.get("/ping", (_req, res) => {
    res.json({
      timestamp: new Date().toISOString(),
    });
  });

  app.listen(PORT, () => {
    console.log("Listening at port:", PORT);
  });
})();
