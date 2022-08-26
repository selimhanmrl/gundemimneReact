import React from 'react';

export default function Basket(props) {
  const { cartItems, onRemove } = props;


  const handleSubmit = ()=>{
    fetch("http://localhost:5000/api/v1/data", {
      method: "POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({gundem :cartItems}),
    })
  }

  const copyToClipboard = () => {
    let str = ""
    cartItems.map((card)=>{
        str = str + card.name + "\n";
    })
    str += "\ngundemimne.com";
    console.log(str)

    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return window.navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };
 function Example() {
    return (
      
      alert("Gündemlerin kopyalandı! Paylaşmaya Hazır")

    );
  }


  const func=()=>{
    //handleSubmit();
    copyToClipboard();
    Example();
  }

  return (
    <aside class=" lg:w-2/5  flex flex-col  gap-10 py-10 ">
    
      <div class='sticky  top-0 hover:scroll-auto  flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg '>
        {cartItems.map((item) => (
          <div key={item._id} class="flex  justify-center my-2">
            <div class="">{item.name}</div>
          </div>
        ))}



            <div class="flex justify-center">
              <button onClick={() =>func()} class=" my-2 px-12 py-1 bg-gray-800 hover:bg-gray-500 text-white text-sm font-bold rounded-full  justify- ">
                Kopyala
              </button>
            </div>

        
      </div>
    </aside>

  );
}
