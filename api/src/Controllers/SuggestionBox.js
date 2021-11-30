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

module.exports = { getSuggestionBox, postSuggestionBox };
