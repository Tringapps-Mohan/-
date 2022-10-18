import { createStore } from 'redux';
import './App.css';
import Card from './Card';
import Product from './Product';
import { Provider } from 'react-redux';
import data from './data.json';
import { useEffect, useState } from 'react';
function App() {
  // const [state,setState] = useState({options:[],type:""});
  const [options,setOptions] = useState([]);
  const [ProductType,setProductType] = useState("");
  let v = localStorage.getItem("oct-task-1");
  const [cards,setCards] = useState(v?JSON.parse(v):{});
  function showCart(type){
    setOptions(data.Phones.find(e=>e.type == type).options);
    setProductType(type);
  }

  useEffect(()=>{
  },[options,ProductType,cards]);

  return (
    <>
      <div>
        <button onClick={()=>showCart("Realme")}>Realme</button>
        <button onClick={()=>showCart("Samsung")}>Samsung</button>
        <button onClick={()=>showCart("Intex")}>Intex</button>
      </div>
      <div>
        {Object.values(cards).filter(e=>e.type === "Realme").map(e=><Card name={e.name} quantity={e.quantity} price={e.price} total={e.total}/>)}
      </div>
      {
        ProductType=="Realme"?<div>
        <Product options={options} type={ProductType} name={options[0].nameU}/>
        </div>:""
      }
    </>
  );
}

export default App;
