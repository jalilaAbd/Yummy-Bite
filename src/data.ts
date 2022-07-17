import React from "react";
import Lemon from "./images/lemon.jpg";
import Chocolate from "./images/chocolate.jpg";
import Fruit from "./images/fruit.jpg";
import Caramel from "./images/caramel.jpg";
import Cake from "./images/cake.svg";
import Macaron from "./images/macaron.svg";
import CupCake from "./images/cupcake.svg";
import Donut from "./images/donut.svg";
import Tart from "./images/tart.svg";
import Cookie from "./images/cookie.svg";
import MainImg from "./images/main.svg";
import Chef1 from "./images/chef1.svg";
import Chef2 from "./images/chef2.svg";

export const FlavorData = [
  { name: "Lemon", image: Lemon },
  { name: "Chocolate", image: Chocolate },
  { name: "Fresh fruit", image: Fruit },
  { name: "Caramel", image: Caramel },
];

export const ProductData = [
  {
    title: "cake",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    image: Cake,
    ingredients: [
      "Eggs",
      "Butter",
      "Milk",
      "Sugar",
      "Flour",
      "Vanilla",
      "Baking soda",
    ],
    flavors: [FlavorData[0], FlavorData[1], FlavorData[2]],
  },
  {
    title: "macaron",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    image: Macaron,
    ingredients: [
      "Eggs",
      "Butter",
      "Milk",
      "Sugar",
      "Flour",
      "Vanilla",
      "Baking soda",
    ],
    flavors: [FlavorData[0], FlavorData[1], FlavorData[3]],
  },
  {
    title: "cupcake",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    image: CupCake,
    ingredients: [
      "Eggs",
      "Butter",
      "Milk",
      "Sugar",
      "Flour",
      "Vanilla",
      "Baking soda",
    ],
    flavors: [FlavorData[1], FlavorData[2], FlavorData[3]],
  },
  {
    title: "donuts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    image: Donut,
    ingredients: [
      "Eggs",
      "Butter",
      "Milk",
      "Sugar",
      "Flour",
      "Vanilla",
      "Baking soda",
    ],
    flavors: [FlavorData[0], FlavorData[1], FlavorData[3]],
  },
  {
    title: "tart",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    image: Tart,
    ingredients: [
      "Eggs",
      "Butter",
      "Milk",
      "Sugar",
      "Flour",
      "Vanilla",
      "Baking soda",
    ],
    flavors: [FlavorData[0], FlavorData[1], FlavorData[2]],
  },
  {
    title: "cookies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    image: Cookie,
    ingredients: [
      "Eggs",
      "Butter",
      "Milk",
      "Sugar",
      "Flour",
      "Vanilla",
      "Baking soda",
    ],
    flavors: [FlavorData[0], FlavorData[1], FlavorData[3]],
  },
];

export const SectionData = [
  {
    title: "Yummy Bite",
    text:
      "For our desserts we always use only the natural ingredients.  Our production is 100% handmade",
    image: MainImg,
    button: "Find your dessert",
  },
  {
    title: "Products",
    text:
      "Lorem ipsum dolor sit amet. Rem nihil consequatur et cumque doloremque in incidunt quaerat ea voluptate consequuntur. Et velit unde aut repudiandae accusantium et debitis sunt id eveniet labore est fuga excepturi. ",
    products: ProductData,
  },
  {
    title: "About ",
    text:
      "Lorem ipsum dolor sit amet. Rem nihil consequatur et cumque doloremque in incidunt quaerat ea voluptate consequuntur. Et velit unde aut repudiandae accusantium et debitis sunt id eveniet labore est fuga excepturi. ",
    image: Chef1,
  },
  {
    title: "Made with love",
    text:
      "Lorem ipsum dolor sit amet. Rem nihil consequatur et cumque doloremque in incidunt quaerat ea voluptate consequuntur. Et velit unde aut repudiandae accusantium et debitis sunt id eveniet labore est fuga excepturi.",
    image: Chef2,
    inverse: true,
  },
  {
    title: "Contact us",
    text:
      " Feel free to contact us any time. We will get back to you as soon as we can!",
  },
];
