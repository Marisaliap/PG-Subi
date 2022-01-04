const { Chat, User } = require("../db.js");

const getChat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id2 } = req.query;
    let chats;
    chats = await Chat.findAll({ where: { author: id, userEmail: id2 } });
    res.send(chats);
  } catch (error) {
    next(error);
  }
};

const postChat = async (req, res, next) => {
  try {
    const { author, message, email } = req.body;

    const chats = await Chat.create({
      author,
      message,
      date: Date.now(),
    });
    const users = await User.findByPk(email);

    await users.addChat(chats.id);
    res.send(chats);
  } catch (error) {
    next(error);
  }
};

const deleteChat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findByPk(id);
    await chat.destroy();
    res.send("Registro eliminado");
  } catch (error) {
    next(error);
  }
};

module.exports = { getChat, postChat, deleteChat };
