const { User, Car, Route } = require("../db.js");

const setDb = async (req, res, next) => {
  try {
    const users = [
      {
        name: "Raul",
        lastName: "Fernandez",
        email: "raufer@hotmail.com",
        telephone: "1132648795",
        facebook: "RaulFernandez",
        instagram: "@RaulFernandez123",
        province: "Buenos Aires",
        city: "Lujan",
        street: "Ambrosetti 210",
        dni: 42651348,
        age: 25,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mauris quis odio iaculis bibendum porta ac lectus. Fusce consectetur quam ligula, sit amet accumsan velit feugiat quis. Curabitur faucibus ipsum vel purus dictum, sed maximus tellus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id ligula at lacus aliquet commodo eu placerat diam. Duis turpis nibh, pretium eu neque a, commodo tincidu.",
        genre: "male",
        calification: 5,
        photo: "",
        photoDni: ["midni.jpg"],
      },
      {
        name: "Alberto",
        lastName: "Martinez",
        email: "ber12nez@gmail.com",
        telephone: "154539870",
        facebook: "Beto Martinez",
        instagram: "@Beto_Martinez",
        province: "Cordoba",
        city: "Rio Cuarto",
        street: "San Martin 56",
        dni: 29951459,
        age: 50,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mauris quis odio iaculis bibendum porta ac lectus. Fusce consectetur quam ligula, sit amet accumsan velit feugiat quis. Curabitur faucibus ipsum vel purus dictum, sed maximus tellus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id ligula at lacus aliquet commodo eu placerat diam. Duis turpis nibh, pretium eu neque a, commodo tincidu.",
        genre: "male",
        calification: "2",
        photo: "",
        photoDni: ["64385sd65a6.png"],
      },
      {
        name: "Gabriel",
        lastName: "Cepeda",
        email: "sangabycepe@gmail.com",
        telephone: "1103504897",
        facebook: "Gabi Cepeda",
        instagram: "@Gaby_Cepe",
        province: "Buenos Aires",
        city: "La Plata",
        street: "Sarmiento 653",
        dni: 39847536,
        age: 36,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mauris quis odio iaculis bibendum porta ac lectus. Fusce consectetur quam ligula, sit amet accumsan velit feugiat quis. Curabitur faucibus ipsum vel purus dictum, sed maximus tellus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id ligula at lacus aliquet commodo eu placerat diam. Duis turpis nibh, pretium eu neque a, commodo tincidu.",
        genre: "male",
        calification: "1",
        photo: "",
        photoDni: ["fotodn.jpg"],
      },
      {
        name: "Ricardo",
        lastName: "Loyola",
        email: "rickdmokey@hotmail.com",
        telephone: "1197003640",
        facebook: "Ricky Loyola",
        instagram: "@Ricky456",
        province: "Buenos Aires",
        city: "Marcos Paz",
        street: "Belgrano 1020",
        dni: 30789005,
        age: 48,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mauris quis odio iaculis bibendum porta ac lectus. Fusce consectetur quam ligula, sit amet accumsan velit feugiat quis. Curabitur faucibus ipsum vel purus dictum, sed maximus tellus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id ligula at lacus aliquet commodo eu placerat diam. Duis turpis nibh, pretium eu neque a, commodo tincidu.",
        genre: "male",
        calification: "4",
        photo: "",
        photoDni: ["dnigivemearide.png"],
      },
      {
        name: "Ana",
        lastName: "Lopez",
        email: "anlo132@gmail.com",
        telephone: "114896420",
        facebook: "AnaLol",
        instagram: "@Ana4646",
        province: "Buenos Aires",
        city: "Moron",
        street: "Tres Sargentos 815",
        dni: 37890849,
        age: 33,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mauris quis odio iaculis bibendum porta ac lectus. Fusce consectetur quam ligula, sit amet accumsan velit feugiat quis. Curabitur faucibus ipsum vel purus dictum, sed maximus tellus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id ligula at lacus aliquet commodo eu placerat diam. Duis turpis nibh, pretium eu neque a, commodo tincidu.",
        genre: "female",
        calification: "4",
        photo: "",
        photoDni: ["image_stock6854354.jpg"],
      },
      {
        name: "Julia",
        lastName: "Resnik",
        email: "jujumkla98@gmail.com",
        telephone: "114772039",
        facebook: "July Resnik",
        instagram: "@Julia6546",
        province: "Córdoba",
        city: "Alta Gracia",
        street: "Araoz Alfaro 44",
        dni: 33458974,
        age: 44,
        about:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mauris quis odio iaculis bibendum porta ac lectus. Fusce consectetur quam ligula, sit amet accumsan velit feugiat quis. Curabitur faucibus ipsum vel purus dictum, sed maximus tellus vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id ligula at lacus aliquet commodo eu placerat diam. Duis turpis nibh, pretium eu neque a, commodo tincidu.",
        genre: "female",
        calification: "3",
        photo: "",
        photoDni: ["image_stock054191365.jpg"],
      },
    ];

    const routes = [
      {
        idUser: "sangabycepe@gmail.com",
        originName: "La Plata,Buenos Aires",
        destinyName: "Rio Cuarto, Cordoba",
        origin: [-57.95, -34.93333],
        destiny: [-64.2696215, -33.0906485],
        price: 562 * 7,
        date: "2021-11-30",
        hours: "16:30",
        place: 3,
        restriction: "pet,mate",
      },
      {
        idUser: "jujumkla98@gmail.com",
        originName: "Alta Gracia, Cordoba",
        destinyName: "Bariloche, Rio Negro",
        origin: [-64.428281, -31.658237],
        destiny: [-65.086624, -40.808689],
        price: 865 * 7,
        date: "2021-11-29",
        hours: "20:45",
        place: 2,
        restriction: "mate",
      },
      {
        idUser: "ber12nez@gmail.com",
        originName: "Lujan, Buenos Aires",
        destinyName: "Rosario, Santa Fe",
        origin: [-59.19389, -34.421246],
        destiny: [-60.647752, -32.940228],
        price: 313 * 7,
        date: "2021-12-10",
        hours: "09:25",
        place: 1,
        restriction: "smoke,pet",
      },
      {
        idUser: "anlo132@gmail.com",
        originName: "Moron, Buenos Aires",
        destinyName: "Rio Hondo, Santiago del Estero",
        origin: [-58.363335, -34.614975],
        destiny: [-64.856898, -27.495626],
        price: 705 * 7,
        date: "2021-12-15",
        hours: "12:30",
        place: 4,
        restriction: "food",
      },
    ];

    const cars = [
      {
        idUser: "sangabycepe@gmail.com",
        patent: "das564",
        brand: "Chevrolet",
        model: "Classic",
        cylinder: 904,
        color: "Black",
      },
      {
        idUser: "jujumkla98@gmail.com",
        patent: "hyd680",
        brand: "Peugeot",
        model: "308",
        cylinder: 891,
        color: "White",
      },
      {
        idUser: "ber12nez@gmail.com",
        patent: "ghq026",
        brand: "Volkswagen",
        model: "Bora",
        cylinder: 1102,
        color: "Black",
      },
      {
        idUser: "anlo132@gmail.com",
        patent: "xgq809",
        brand: "Fiat",
        model: "Argo",
        cylinder: 950,
        color: "Red",
      },
    ];

    async function setUser(arrUsers) {
      for (let i = 0; i > arrUsers; i++) {
        await User.create({
          name: arrUsers[i].name,
          photo: arrUsers[i].photo,
          lastName: arrUsers[i].lastName,
          email: arrUsers[i].email,
          telephone: arrUsers[i].telephone,
          facebook: arrUsers[i].facebook,
          instagram: arrUsers[i].instagram,

          province: arrUsers[i].province,
          city: arrUsers[i].city,
          street: arrUsers[i].street,
          dni: arrUsers[i].dni,
          age: arrUsers[i].age,
          about: arrUsers[i].about,
          genre: arrUsers[i].genre,
          calification: arrUsers[i].calification,
          photoDni: arrUsers[i].photoDni,
        });
      }
    }
    setUser(users);

    /*users.map(async (user) => {
      await User.findOrCreate(
        {
          where: {email:user.email},
          defaults: {
            name:user.name,
            photo:user.photo,
            lastName:user.lastName,
            email:user.email,
            telephone:user.telephone,
            facebook:user.facebook,
            instagram:user.instagram,
  
            province:user.province,
            city:user.city,
            street:user.street,
            dni:user.dni,
            age:user.age,
            about:user.about,
            genre:user.genre,
            calification:user.calification,
            photoDni:user.photoDni,
          }
        }
      )
    })*/

    routes.map(async (route) => {
      let routeResult = await Route.create({
        originName: route.originName,
        destinyName: route.destinyName,
        origin: route.origin,
        destiny: route.destiny,
        date: route.date,
        price: route.price,
        hours: route.hours,
        place: route.place,
        restriction: route.restriction,
      });
      await routeResult.addUser(route.idUser);
    });

    cars.map(async (car) => {
      await Car.create({
        idUser: car.idUser,
        patent: car.patent,
        brand: car.brand,
        model: car.model,
        cylinder: car.cylinder,
        color: car.color,
      });
      const user = await User.findByPk(car.idUser);
      await user.addCar(patent);
    });

    res.send("Ready?");
  } catch (err) {
    next(err);
  }
};

module.exports = { setDb };
