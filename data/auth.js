import jwt from "jsonwebtoken";

const authtoken = (usernameobj, secreto, expiresIn) => {
  const { movil, email, nombre } = usernameobj;
  return jwt.sign({ user: { movil, email, nombre } }, process.env.SECRET, {
    expiresIn
  }); // (usuario,secreto,expira) usuario debe ser un objeto
};
export default authtoken;
