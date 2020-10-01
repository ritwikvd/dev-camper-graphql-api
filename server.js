require("dotenv").config();

const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const resolvers = require("./src/graphql/resolvers");

const typesArray = loadFilesSync(path.join(__dirname, "./src/graphql/schema/*/*.js"));

const server = new ApolloServer({
	typeDefs: mergeTypeDefs(typesArray),
	resolvers,
	context: ({ req }) => ({ auth: req.headers?.authorization })
});

const app = express();

server.applyMiddleware({ app });

//Use React build
// app.use(express.static("./client/build"));

// app.get("*", (_, res) => res.sendFile(path.resolve("./client/build/index.html")));
//

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`yoohoo in ${process.env.NODE_ENV} mode from http://localhost:${PORT}`));

// server.listen(PORT).then(({ url }) => console.log(`yoohoo in ${process.env.NODE_ENV} mode from ${url}`));
