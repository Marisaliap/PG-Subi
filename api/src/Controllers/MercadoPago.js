const mercadopago = require ('mercadopago');
const { Order } = require('../db.js');

const { ACCESS_TOKEN } = process.env;

const getMP = async (req,res,next) => {
  try {
    const {
      id_orden,
      title,
      price,
    } = req.body

    mercadopago.configure({access_token: ACCESS_TOKEN});

    const item_ml =
      {
        title: title,
        unit_price: price,
        quantity: 1,
      };

    let preference = {
      items: [item_ml],
      external_reference : `${id_orden}`,
      back_urls: {
        success: 'http://localhost:3001/mercadopago/payment',
        failure: 'http://localhost:3001/mercadopago/payment',
        pending: 'http://localhost:3001/mercadopago/payment',
      }
    };

    const response = await mercadopago.preferences.create(preference)

    global.id = response.body.id;
    res.json({id: global.id, init_point: response.body.init_point});

  } catch(err)  {
    next(err)
  }
}


const getMPById = async (req,res,next) => {
  try{
    const mp = new mercadopago(ACCESS_TOKEN)
    const id = req.params.id

    const result = await mp.get(`/v1/payments/search`, {'status': 'pending'})
    res.json({"resultado": result})

  } catch(err){
    next(err)
  }
}


const getMPPayment = (req,res) => {
  const { payment_id,payment_status,external_reference,merchant_order_id } =  req.query;

  Order.findByPk(external_reference)
  .then((order) => {
    order.payment_id= payment_id
    order.payment_status= payment_status
    order.merchant_order_id = merchant_order_id
    order.status = "created"
    order.save()
    .then(() => res.redirect("http://localhost:3000"))
    .catch((err) => res.redirect(`http://localhost:3000/?error=${err}&where=al+salvar`))
  })

  .catch(err => res.redirect(`http://localhost:3000/?error=${err}&where=al+buscar`))
}

module.exports = {getMP,getMPById,getMPPayment}
