import axios from "../axios.jsx";
const response = await axios.get('/getProduct');
console.log('responsemenu:',response)
const Menu = response.data.result;
/*const Menu = [
    {
      id: 1,
      image: "./images/car.avif",
      name: "Car",
      category: "AtuoMobile",
      price: "500000₹",
      description:
        "I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "
    },
  
    {
      id: 2,
      image: "./images/bulb.webp",
      name: "Bulb",
      category: "Electical",
      price: "100₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "
    },
    {
      id: 3,
      image: "./images/mobile.avif",
      name: "Mobile",
      category: "Electronics",
      price: "12000₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "
    },
    {
      id: 4,
      image: "./images/chair.webp",
      name: "Chair",
      category: "Furniture",
      price: "1000₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "
    },
    {
      id: 5,
      image: "./images/door.jpg",
      name: "Door",
      category: "Hardware",
      price: "2000₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "
    },
    
  ];*/
  
  export default Menu;
  