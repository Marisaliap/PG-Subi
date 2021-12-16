const { SuggestionBox } = require("../db.js");

const getSuggestionBox = async (req, res, next) => {
  try {
    const sugeestions = await SuggestionBox.findAll();
    res.send(sugeestions);
  } catch (err) {
    next(err);
  }
};

const postSuggestionBox = async (req, res, next) => {
  try{
    const {
      author,
      authorEmail,
      suggestion
    } = req.body;
    
    const sugeestions = await SuggestionBox.create({author, authorEmail,suggestion });
    res.send(sugeestions);
  } catch (err) {
    next(err);
  }
};

const deleteSuggestionBox = async (req, res, next) => {
  try {
    const { id } = req.params;
    const suggestion = await SuggestionBox.findByPk(id);
    await suggestion.destroy();
    res.send("Registro eliminado");
  } catch (err) {
    next(err);
  }
};

module.exports = { getSuggestionBox, postSuggestionBox, deleteSuggestionBox };
