const Person = require("../model/persona_model");

class PersonRepository {
  async findAll() {
    return await Person.find().lean().exec();
  }

  async createPerson(data) {
    let newPerson = Person(data);

    return await newPerson.save();
  }

  async deletePersons() {
    return await Person.deleteMany();
  }
}

module.exports = PersonRepository;
