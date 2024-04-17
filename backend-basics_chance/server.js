import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age({ type: "adult" });
  const profession = chance.profession();
  const responseMessage = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;
  response.statusCode = 200;
  response.end(responseMessage);
});
