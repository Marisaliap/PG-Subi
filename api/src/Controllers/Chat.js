const { Chat, User } = require('../db.js');

const getChat = async (req, res, next) => {
    try {
        const { id } = req.params;
        let chats
        chats = await Chat.findAll({where:{author: id}});
        res.send(chats)
        
    } catch (error) {
        next(error);
    }
}


const postChat = async (req, res, next) => {
    try {
        const {
            author,
            messages,
            date,
            email
        } = req.body;

        const chats = await Chat.create({
            author,
            messages,
            date,
            },
        )
        const users = await User.findByPk(email)

        await users.addChat(chats.id);
        res.send(chats);
    } catch (error) {
        next(error);
    }
}


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
