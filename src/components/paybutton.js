import axios from 'axios' /*for http request*/
import { useSelector } from 'react-redux'
import {url}from  '../slices/api'

const paybutton = ({cartItems}) => {

const handlecheckout = ()=>{
console.log(cartItems)
}


    return ( 

<button onClick={()=>handlecheckout}>checkout</button>

     );
}
 
export default paybutton;