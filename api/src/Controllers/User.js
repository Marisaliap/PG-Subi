const { UUIDV4 } = require('sequelize/types');
const { User } = require('../db.js');
const { v4: uuidv4 } = require('uuid')

const postUser = async (req, res, next) => {
    try {
        const {
            name,
            email,
            password,
            lastName,
            genre,
            about,
            age,
            dni,
            street,
            city,
            province,
            telephone,
            facebook,
            calification
        } = req.body;

        const user = await User.findOrCreate({
            where: {
                name: name,
                id: user.id,
                email: email,
                password: password,
                lastName: lastName,
                genre: genre,
                about: about,
                age: age,
                dni: dni,
                street: street,
                city: city,
                province: province,
                telephone: telephone,
                facebook: facebook,
                calification: calification,
            },


        });
        res.status(201).send(user);

    } catch (error) {
        next(error)
    }
}

