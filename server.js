import { fastify } from "fastify";
import { DatabaseAthletesPostgres } from "./database/database-athletes-postgres";

const server = fastify({
  logger: true
});

const dbAthletes = new DatabaseAthletesPostgres();

server.get('/atletas', async (request) => {
  const search = request.query.search || '';
  console.log('>>>>>>>>> ', search);
  const athletes = await dbAthletes.list(search);

  return athletes;
});

// WIP

// server.post('/atleta', async (request, reply) => {
//   const {name, gender, age} = request.body;

//   await dbAthletes.create({
//     name,
//     gender,
//     age
//   });

//   return reply.status(201).send();
// });

// server.put('/atleta/:id', () => {
//   return 'Update info from specific athlete'
// });

server.listen({
  port: 3000,
})