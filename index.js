import "./data/models/db";
import jwt from "jsonwebtoken";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema/";
import { resolvers } from "./data/resolvers/";
var consolere = require("console-remote-client").connect(
  "console.re",
  "80",
  "crtecnicos"
);





require("dotenv").config();
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: async ({ req }) => {
    const bearertoken = req.headers["authorization"]; //Obtiene el token del header

    switch (typeof bearertoken) {
      case "undefined":
        return null;
        break;

      default:
        try {
          if (bearertoken.length < 40) {
            return null;
          }
          const token = bearertoken.replace("Bearer ", ""); //recorta el Bearer y deja unicamente el token
          const sesion = await jwt.verify(token, process.env.SECRET);
          req.sesion = sesion;
          console.log(token);

          return { sesion };
        } catch (err) {
          console.log("token invalido");
        }

        break;
    }
  }
});

server.applyMiddleware({ app });
app.set("port", process.env.PORT || 8000);
app.listen(app.get("port"), () => {
  console.log(`El servidor Ya inicio en el Puerto ${app.get("port")}`);
 
});
