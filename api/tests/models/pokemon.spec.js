const { Pokemons, Types, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemons.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemons.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if name type is not a string', (done) => {
        Pokemons.create({name: 1})
          .then(() => done())
          .catch(() => done(new Error('Name input can only be a string')));
      });
    });
    describe('type', () => {
      it('should return all genres', () => {
        Types.findAll()
        .then((response) => done(expect(response).toHaveLength(20)))
        .catch(() => done());
    });
      })
    })
  });

