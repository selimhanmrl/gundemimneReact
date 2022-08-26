import Cart from "./components/Cart";
import { Header } from "./components/Header";
import { useState, useEffect } from 'react';
import Main  from "./components/Main";
import Footer from "components/Footer";
import {HeroSection} from "./components/HeroSection"
import data from "data";
function App() {
  //const [datas, setdatas] = useState([]);

//   useEffect(() => {
//     await fetch(`http://localhost:5000/api/v1`,{
//       method: "GET",
//     })
//        .then((response) => response.json()
//        .then(data => setdatas(data))
//        .catch((error) => console.log(error))
//     )
//  }, [])
//setdatas(data);
const datas = data.datas;
const [cartItems, setCartItems] = useState([]);

  
  const onAdd = (data) => {
    const exist = cartItems.find((x) => x._id === data._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === data._id ? { ...exist, qty: 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...data, qty: 1 }]);
    }
  };
  const onRemove = (data) => {
    const exist = cartItems.find((x) => x._id === data._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== data._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === data._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  return (
    <div class="bg-gray-100 ">    
      <Header/>
      <HeroSection/>
      <div class= "  ">
        <div class="flex my-2 justify-between ">
          <Main class="w-3/4 bg-white px-10 " datas={datas} onAdd={onAdd} onRemove={onRemove}></Main>
          <Cart class="w-1/4 " cartItems={cartItems} onRemove={onRemove}></Cart>

        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
