const mercadopago = require ('mercadopago');
const { Order, Route } = require('../db.js');

const axios = require('axios')
const { ACCESS_TOKEN } = process.env;

const postMP = async (req,res,next) => {
  try {
    let {
      idUser,
      idRoute,
      title,
      price,
    } = req.body

    price = parseInt(price);
      const orden = await Order.create({status:'processing'});
      const route = await Route.findByPk(idRoute);
      await route.addOrder(orden.id);

    mercadopago.configure({access_token: ACCESS_TOKEN});
    const item_ml =
      {
        title: title,
        unit_price: price,
        quantity: 1,
      };

    let preference = {
      items: [item_ml],
      external_reference : `${orden.id}`,
      payment_methods: {
      excluded_payment_types: [
        {
          id: "ticket"
        }
      ],
      installments: 1
  	  },
      back_urls: {
        success: 'http://localhost:3001/mercadopago/payment?idRoute=' + idRoute + '&idUser=' + idUser,
        failure: 'http://localhost:3000/route/' + idRoute
      }
    };

    const response = await mercadopago.preferences.create(preference)

    global.id = response.body.id;

    res.json({id:orden.id,init_point: response.body.sandbox_init_point});

  } catch(err)  {
    next(err)
  }
}


const getMPPayment = async (req,res) => {
  const { payment_id,payment_status,external_reference,merchant_order_id } =  req.query;
  const {idRoute, idUser} = req.query

  Route.findByPk(idRoute)
  .then((route) => {
    axios.put('http://localhost:3001/maps/route/' + route.id, {
      place: route.place - 1,
      idUser: idUser
    })
  })

  Order.findByPk(external_reference)
  .then((order) => {
    order.payment_id= payment_id
    order.payment_status= payment_status
    order.merchant_order_id = merchant_order_id
    order.status = "created"
    order.save()
    .then(() => res.redirect("http://localhost:3000/home"))
    .catch((err) => res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`))
  })

  .catch(err => res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`))
}

module.exports = {postMP,getMPPayment}
