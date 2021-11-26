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
            id
        } = req.body;



        var posts = Post.findOrCreate({
            where: {
                title,
                date,
                author,
                description,
                calification,
            
            },
        })
        let users = await User.findByPk(id)
        await users.addPost(author);
        res.send(posts);

    } catch (error) {
        next(error);
    }
}


// const allPost = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const {
//             idUser,
//             title,
//             date,
//             author,
//             description,
//             calification,
//         } = req.body;

//         var posts,users

//         if (!id) {
//             posts = await Post.findOrCreate({
//                 where: {
//                     title, 
//                     date,
//                     author,
//                     description,
//                     calification,
//                  },
//             })
//              users = await User.findByPk(idUser)
//              await users.addPost(id);

//         }else{

//             posts = await Post.findByPk(id);
//     }
//         res.send(posts);
//     } catch (error) {
//         next(error);
//     }
// }




module.exports = { getPost, setPost };
// module.exports = { allPost };