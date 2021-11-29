const { Post, User } = require('../db.js');

const getPost = async (req, res, next) => {
    try {
        const { id } = req.query;
        var posts
        if (id) {
            posts = await Post.findByPk(id);
            res.send(posts)
        }
        posts = await Post.findAll();
        return res.send(posts);

    } catch (error) {
        next(error);
    }
}


const setPost = async (req, res, next) => {
    try {
        const {
            title,
            date,
            author,
            description,
            calification,
            idUser
        } = req.body;


        const posts = Post.findOrCreate({
            where: {
                title,
                date,
                author,
                description,
                calification,
            },
        })
        const users = await User.findByPk(idUser)
        await users.addPost(author);
        res.send(posts);

    } catch (error) {
        next(error);
    }
}


module.exports = { getPost, setPost };
