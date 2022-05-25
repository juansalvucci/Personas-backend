const express = require("express");
const PersonService = require("../service/persona_service");

class PersonController {
  constructor() {
    this.personService = new PersonService();
    this.router = express.Router();
    this.router.post("/", (req, res) => {
      this.createPerson(req, res);
    });
    this.router.get("/", (req, res) => {
      this.getPersons(req, res);
    });
    this.router.delete("/", (req, res) => {
      this.deletePersons(req, res);
    });
  }

  getPersons(req, res) {
    const personsPromise = this.personService.getPersons();

    personsPromise
      .then((persons) => {
        res.json(persons);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ error: err.message });
      });
  }

  createPerson(req, res) {
    const personPromise = this.personService.createPerson();

    personPromise
      .then((person) => {
        res.json(person);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(400).json({ error: err.message });
      });
  }

  deletePersons(req, res) {
    const personPromise = this.personService.deletePersons();
    personPromise
      .then((person) => {
        res.json(person);
      })
      .catch((err) => {
        res.status(400).json(err);
        console.log(err);
      });
  }
}

module.exports = PersonController;
