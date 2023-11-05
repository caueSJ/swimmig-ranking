import { fastify } from "fastify";
import { DatabaseAthletesPostgres } from "./database/database-athletes-postgres";

const server = fastify({
  logger: true
});

const dbAthletes = new DatabaseAthletesPostgres();

server.get('/athletes', async (request) => {
  const search = request.query.search || '';
  const athletes = await dbAthletes.list(search);

  return athletes;
});

// WIP

// server.post('/athlete', async (request, reply) => {
//   const {name, gender, age} = request.body;

//   await dbAthletes.create({
//     name,
//     gender,
//     age
//   });

//   return reply.status(201).send();
// });

// server.put('/athlete/:id', () => {
//   return 'Update info from specific athlete'
// });

server.listen({
  port: 3000,
})