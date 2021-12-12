
export const userData = (orders) => {
  console.log(orders, 'soy dummy')

  const january = orders.map(order => order.month === '1' && order.price || 0 ).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  const february = orders.map(order => order.month === '2' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const march = orders.map(order => order.month === '3' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const april = orders.map(order => order.month === '4' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const may = orders.map(order => order.month === '5' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const june = orders.map(order => order.month === '6' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const july = orders.map(order => order.month === '7' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const august = orders.map(order => order.month === '8' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const september = orders.map(order => order.month === '9' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const october = orders.map(order => order.month === '10' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const november = orders.map(order => order.month === '11' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  const december = orders.map(order => order.month === '12' && order.price || 0 ).reduce((previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue), 0)
  
return [
  
    {
      name: "Dec",
      "Sales": december,
    },
    {
      name: "Jan",
      "Sales": january,
    },
    {
      name: "Feb",
      "Sales": february,
    },
    {
      name: "Mar",
      "Sales": march,
    },
    {
      name: "Apr",
      "Sales": april,
    },
    {
      name: "May",
      "Sales": may,
    },
    {
      name: "Jun",
      "Sales": june,
    },
    {
      name: "Jul",
      "Sales": july,
    },
    {
      name: "Agu",
      "Sales": august,
    },
    {
      name: "Sep",
      "Sales": september,
    },
    {
      name: "Oct",
      "Sales": october,
    },
    
    {
      name: "Nov",
      "Sales": november,
    },
  ];}

  export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];

  export const userRows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 10,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ];

  export const productRows = [
    {
      id: 1,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 2,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 3,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 4,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 5,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 6,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 7,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 8,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 9,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 10,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
  ];