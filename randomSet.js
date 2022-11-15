const { v4: uuidv4 } = require('uuid');

let DUMMY_MENUS = [
    {
      id: uuidv4(),
      store: "S&P",
      name: "Tuna Sandwich",
      nutrition: {
        callories: "450",
        protein: "13",
        carbohydrate: "10",
        fat: "5",
      },
      image:'URL',
      type:['kid','protein','clean'],
      price:'40'
    },
    {
      id: uuidv4(),
      store: "S&P",
      name: "Fried rice",
      nutrition: {
        callories: "300",
        protein: "10",
        carbohydrate: "15",
        fat: "9",
      },
      image:'URL2',
      type:['protein','clean'],
      price:'50'
    },
  ];

  console.log(DUMMY_MENUS)




  let s  ='Hello World';
  console.log(s.slice(0,1)+s.slice(2,s.length));