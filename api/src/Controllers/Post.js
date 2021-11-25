const { Post } = require('../db.js');

// const getPost = async (req, res, next) => {
//     try {
//         const { id } = req.query;
//         var posts
//         if (id) {
//             posts = await Post.findByPk(id);
//             res.send(posts)
//         }
//         posts = await Post.findAll();
//         return res.send(posts);
//         //    req.body.id? 
//         //    post = await Post.findById(id)
//         //         res.send(post);
//         //     : post = await Post.findall()
//         //          res.send(post);
//     } catch (error) {
//         next(error);
//     }
// }
// const setPost = async (req, res, next) => {
//     try {
//         const {
//             title,
//             date,
//             author,
//             description,
//             calification,
//         } = req.body;



//          var posts = Post.findOrCreate({
//             where: {
//                 title,
//                 date,
//                 author,
//                 description,
//                 calification
//             },
//         })
//         res.send(posts);

//     } catch (error) {
//         next(error);
//     }
// }
const allPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {
            title,
            date,
            author,
            description,
            calification,
        } = req.body;
        var posts
        if (id) {
            posts = await Post.findByPk(id);
        }else{
        posts = Post.findOrCreate({
            where: {
                title,
                date,
                author,
                description,
                calification
            },
        })}
        res.send(posts);
    } catch (error) {
        next(error);
    }
}



// module.exports = { getPost, setPost };
module.exports = { allPost };