require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const resolvers = require("./resolvers");

const typesArray = loadFilesSync(path.join(__dirname, "./schema/*/*.js"));

const server = new ApolloServer({
	typeDefs: mergeTypeDefs(typesArray),
	resolvers,
	context: ({ req }) => ({ auth: req.headers?.authorization })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT).then(({ url }) => console.log(`yoohoo in ${process.env.NODE_ENV} mode from ${url}`));
