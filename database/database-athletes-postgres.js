import sql from "./db";

export class DatabaseAthletesPostgres {
  async list(search) {
    let athletes = '';

    if (search) {
      athletes = await sql`SELECT * FROM athletes WHERE name ILIKE ${'%'+search+'%'}`;
    } else {
      athletes = await sql`SELECT * FROM athletes`;
    }
    return athletes;
  }

  // WIP

  // async create(athleteInfos) {
  //   const {name, gender = '', age = ''} = athleteInfos;

  //   await sql`INSERT INTO athletes (name, gender, age) VALUES (${name}, ${gender}, ${age})`;
  // }

  // async update(id, athlete) {
  // }

  // async delete(id) {
  // }
}