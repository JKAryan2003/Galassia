import profile from "./icons8-profile-50.png";
import search from "./icons8-search-50.png";
import cart from "./icons8-cart-50.png";
import menu from "./icons8-menu-50.png";
import back from "./icons8-back-50.png";
import exchange from "./icons8-exchange-30.png";
import support from "./icons8-customer-support-64.png";
import returnImg from "./icons8-return-50.png";
import heroImg from "./heroRightSide.avif";
import cross from "./icons8-cross-50.png";
import star from "./icons8-star-48.png";
import dullStar from "./icons8-dullstar-24.png";
import trash from "./icons8-trash-30.png"
import stripe from "./icons8-stripe-24.png"
import razor from "./razorpay-icon.png"
import about from './about.jpg'
import contact from './contact.jpg'

import dress11 from "./dress11.avif";
import dress12 from "./dress12.avif";
import dress21 from "./dress21.avif";
import dress22 from "./dress22.avif";
import dress31 from "./dress31.avif";
import dress32 from "./dress32.avif";
import pant11 from "./pant11.avif";
import pant12 from "./pant12.avif";
import pant21 from "./pant21.avif";
import pant22 from "./pant22.avif";
import pant31 from "./pant31.avif";
import pant32 from "./pant32.avif";
import shirt11 from "./shirt11.avif";
import shirt12 from "./shirt12.avif";
import shirt21 from "./shirt21.avif";
import shirt22 from "./shirt22.avif";
import shirt31 from "./shirt31.avif";
import shirt32 from "./shirt32.avif";
import shirt41 from "./shirt41.avif";
import shirt42 from "./shirt42.avif";

export const assets = {
  profile,
  search,
  cart,
  menu,
  back,
  heroImg,
  exchange,
  support,
  returnImg,
  cross,
  star,
  dullStar,
  trash,
  stripe,
  razor,
  about,
  contact
};

export const products = [
  {
    _id: "aaaa",
    name: "Voluminous bow-back dress",
    description:
      "Short, voluminous dress in woven fabric with a twisted section at the top and straps that tie in a bow at the back of the neck. Unlined.",
    price: 100,
    image: [dress11, dress12],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true,
  },
  {
    _id: "aaab",
    name: "Flared-skirt polo dress",
    description:
      "Short dress in ribbed jersey with a collar, button placket, short sleeves and a gently flared skirt.",
    price: 1399,
    image: [dress31, dress32],
    category: "Women",
    subCategory: "Dress",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345449,
    bestseller: false,
  },
  {
    _id: "aaac",
    name: "Strappy dress",
    description:
      "Calf-length dress in a viscose weave with adjustable spaghetti shoulder straps and a straight neckline with narrow ties at the front. Gathered section over the bust, concealed zip at one side and smocking at the back. High slit at the front. Lined over the bust.",
    price: 1399,
    image: [dress21, dress22],
    category: "Women",
    subCategory: "Dress",
    sizes: ["M", "L", "XL"],
    date: 1716634345450,
    bestseller: true,
  },
  {
    _id: "aaad",
    name: "Regular Fit Oxford shirt",
    description:
      "Shirt in Oxford cotton with a button-down collar, classic front, yoke at the back and an open chest pocket. Long sleeves with buttoned cuffs and a sleeve placket with a link button. Gently rounded hem. Regular fit for comfortable wear and a classic silhouette.",
    price: 1399,
    image: [shirt11, shirt12],
    category: "Men",
    subCategory: "Shirt",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345451,
    bestseller: false,
  },
  {
    _id: "aaae",
    name: "Regular Fit Felted overshirt",
    description:
      "Overshirt in a felted weave with a collar, two-way zip down the front and welt front pockets. Regular fit for comfortable wear and a classic silhouette. Unlined.",
    price: 2999,
    image: [shirt21, shirt22],
    category: "Men",
    subCategory: "Shirt",
    sizes: [],
    date: 1716634345452,
    bestseller: true,
  },
  {
    _id: "aaaf",
    name: "Oversized Fit Canvas overshirt",
    description:
      "Overshirt in sturdy cotton canvas featuring a collar, a yoke at the back and press-studs down the front. Two chest pockets, long sleeves and a press-stud fastening at the cuffs. Slightly rounded hem. Oversized fit for a baggy, extra-loose silhouette.",
    price: 2999,
    image: [shirt41, shirt42],
    category: "Men",
    subCategory: "Shirt",
    sizes: ["XL", "L", "M", "S"],
    date: 1716634345453,
    bestseller: true,
  },
  {
    _id: "aaag",
    name: "Regular Fit Corduroy shirt",
    description:
      "Shirt in soft cotton corduroy with a button-down collar. Features a classic front, open chest pocket and a back yoke. Long sleeves with adjustable buttoned cuffs and a sleeve placket with a link button. Finished with a rounded hem. Regular fit for comfortable wear and a classic silhouette.",
    price: 130,
    image: [shirt31, shirt32],
    category: "Men",
    subCategory: "Shirt",
    sizes: ["S", "M", "L"],
    date: 1716634345454,
    bestseller: false,
  },
  {
    _id: "aaah",
    name: "Straight Relaxed Jeans",
    description:
      "5-pocket jeans in denim with a straight leg and a relaxed fit from the seat to the hem with extra room from the thigh down. Regular waist and a zip fly with a button. Designed for everyday wear. with adjustable drawstrings and a modern fit.",
    price: 90,
    image: [pant11, pant12],
    category: "Men",
    subCategory: "Denim",
    sizes: ["M", "L", "XL"],
    date: 1716634345455,
    bestseller: true,
  },
  {
    _id: "aaai",
    name: "Relaxed Jeans",
    description:
      "5-pocket jeans in rigid cotton denim with a straight leg and a relaxed fit from the seat to the hem with extra room from the thigh down. Regular waist and a button fly. Designed for everyday wear.",
    price: 200,
    image: [pant21, pant22],
    category: "Men",
    subCategory: "Denim",
    sizes: ["S", "M", "L"],
    date: 1716634345456,
    bestseller: true,
  },
  {
    _id: "aaaj",
    name: "Loose Jeans",
    description:
      "5-pocket jeans in rigid cotton denim with a rounded leg and a loose fit from the seat to the hem with a dropped crotch and extra room around the whole leg. Regular waist and a zip fly. All you need to conquer the full denim look.",
    price: 110,
    image: [pant31, pant32],
    category: "Men",
    subCategory: "Denim",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345457,
    bestseller: false,
  },
];
