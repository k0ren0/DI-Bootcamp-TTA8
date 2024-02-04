import jwt from "jsonwebtoken";
import { decode } from "punycode";

/** sign({paylaod},secret-code,{expire})
 * paylaod
 * secret code
 * expire
 */

const token = jwt.sign(
  { email: "zivuch@gmail.com", userid: 16 },
  "G%$$FDGDGD^$#H333",
  {
    expiresIn: "1d",
  }
);

// console.log(token);

const mytoken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InppdnVjaEBnbWFpbC5jb20iLCJ1c2VyaWQiOjE2LCJpYXQiOjE3MDY3ODIyNjUsImV4cCI6MTcwNjg2ODY2NX0.ghjYfOwFG2c-jTSItwmy3F0qLdv2Dfn3tAEVlOMetNE`;

/**
 * verify(token, secret, (err, decoded)=>{})
 */

jwt.verify(mytoken, "G%$$FDGDGD^$#H333", (err, decode) => {
  if (err) return console.log(err.message);
  console.log(decode);
});
