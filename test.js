const { v4: uuidv4 } = require('uuid');
const DUMMY_ORDER = [
  {
    idOrder: "1",
    idFood: "123",
    title: "ข้าวผัด",
    image: "",
    barcode: "",
    qrcode: "",
    customer: "",
    address: "",
    portalCode: "",
    pickupTime: "",
  },
  {
    id: "2",
    idFood: "123",
    title: "ข้าวผัด",
    image: "",
    barcode: "",
    qrcode: "",
    customer: "",
    address: "",
    portalCode: "",
    pickupTime: "",
  },
  {
    id: "3",
    idFood: "123",
    title: "ข้าวผัด",
    image: "",
    barcode: "",
    qrcode: "",
    customer: "",
    address: "",
    portalCode: "",
    pickupTime: "",
  },
  {
    id: "4",
    idFood: "1234",
    title: "ข้าวต้มปลา",
    image: "",
    barcode: "",
    qrcode: "",
    customer: "",
    address: "",
    portalCode: "",
    pickupTime: "",
  },
  {
    id: "5",
    idFood: "1234",
    title: "ข้าวต้มปลา",
    image: "",
    barcode: "",
    qrcode: "",
    customer: "",
    address: "",
    portalCode: "",
    pickupTime: "",
  },
  {
    id: "6",
    idFood: "123",
    title: "ข้าวผัด",
    image: "",
    barcode: "",
    qrcode: "",
    customer: "",
    address: "",
    portalCode: "",
    pickupTime: "",
  },
  {
    id: "7",
    idFood: "1",
    title: "แซนด์วิช",
    image: "",
    barcode: "",
    qrcode: "",
    customer: "",
    address: "",
    portalCode: "",
    pickupTime: "",
  },
];

let DUMMY_TOTAL_ORDER;
for (let i = 0; i < DUMMY_ORDER.length; i++) {}

let DUMMY_MENUS = [
  {
    id: uuidv4(),
    store: "S&P",
    name: "Tuna Sandwich",
    nutrition: {
      callories: "450 cal",
      protein: "13 g",
      carbohydrate: "10 g",
      fat: "5 g",
    },
    image:'URL'
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
    image:'URL2'
  },
];


console.log(DUMMY_MENUS[1].nutrition.fat.split('')[0] == undefined ? true:false);