/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemons, conn } = require('../../src/db.js');

const agent = session(app);


describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemons.sync({ force: true }));
  describe('GET /pokemons', () => {
    it('should get 200', () => 
      agent.get('/pokemons').expect(200)

    );
    it('should get 200 if the Pokemon exists', () => 
      agent.get('/pokemons/?name=pikachu').expect(200)
    );
    it('should get 200 if the Pokemon exists', () => 
      agent.get('/pokemons/3').expect(200)
    );
    it('should get 404 if the Pokemon does not exist', () => 
      agent.get('/pokemons/?name=fakename').expect(404)
    );
    it('should get 404 if the Pokemon does not exist', () => 
      agent.get('/pokemons/4654').expect(404)
    );
  });
});
