const PersonRepository = require("../repository/persona_repository");
const faker = require("@faker-js/faker").faker;

class PersonService {
  constructor() {
    this.personRepository = new PersonRepository();
  }

  async createPerson() {
    let person = await this.personRepository.createPerson({
      nombre_apellido: faker.name.findName(),
      fecha_nacimmiento: faker.date.past(10, "1999-01-01T00:00:00.000Z"),
      ciudad: faker.address.city(),
      email: faker.internet.email(),
    });

    return person;
  }

  async getPersons() {
    let personas = await this.personRepository.findAll();

    return personas;
  }

  async deletePersons() {
    let personas = await this.personRepository.deletePersons();

    return personas;
  }
}

module.exports = PersonService;
