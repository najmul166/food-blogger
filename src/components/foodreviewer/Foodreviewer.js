import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import './foodreviewer.css';

const Foodreviewer = () => {
    const [food,setFood] =useState([]);
    const[cart,setCart] = useState([]);

    useEffect (() => {
      fetch('./foodreviewer.json')
      .then(res => res.json())
      .then(data => setFood(data));
    },[]);

    const handleAddToCart =(foodi) => {
        const newCart = [ ...cart ,foodi];
        setCart(newCart)
    }
    let total = 0;
    let surename=[];
    let image =[];
    let subtotal =0;

    for(const foodi of cart){
        total = total + foodi.salary;
        surename =surename+foodi.name;

        
     }
    return (
        
        <div className>
            
            <div className="full">
            <div className="fooder-container">
            {
                food.map(foodi => <Foodie key ={foodi.id} foodi={foodi} handleAddToCart={handleAddToCart}></Foodie>)
            }
            </div>
            <div className="cart-container">
                <h3>Order List</h3>
                <h4>Item Order:{cart.length}</h4>
                <h4>Total = {total}</h4>
                <div>
                {surename}

                </div>

            </div>
            </div>
            
        </div>
        
    );
};



const Foodie = (props) => {
    console.log(props)
    const {name,age,country,channel,salary,subscriber,img} = props.foodi;
    const element = <FontAwesomeIcon icon={faCoffee} />
    return(
      <div className="fooder">
        <img src= {img} alt=""/>
        <h2>Name:{name}</h2>
        <h3>Age:{age}</h3>
        <h3>Country:{country}</h3>
        <h3>Channel:{channel}</h3>
        <h3>Salary:{salary}</h3>
        <h3>Subscriber:{subscriber}</h3>
        <button onClick={() => props.handleAddToCart(props.foodi)} className="btn-regular">{element} Hire</button>
  
      </div>
    )
  }
  
export default Foodreviewer;