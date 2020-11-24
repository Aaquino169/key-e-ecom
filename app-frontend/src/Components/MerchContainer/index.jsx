import React, {useState, useEffect} from 'react'

import AddMerch from '../AddMerch'
import Merch from '../Merch'
import Cart from '../Cart'

export default function CardComponent(props){
    const url = process.env.REACT_APP_API_URL;
    const [merch, setMerch] = useState([])
    const [id , setId] = useState('')
    const [cart, setCart] = useState([])
    const [newMerch, insertMerch]=useState([])

    useEffect(() =>{
        fetchData()
    },[]);


    // gets merch data R
    const fetchData = async () =>{
        try{
            const data = await fetch(url);
            const allMerch = await data.json();
            console.log(allMerch)
            setMerch(allMerch)
        } catch(err){
            console.log('Error getting Merch data', err)
        }
    }





    // remove merch D
    const removeMerch = async (id) =>{
        const url =process.env.REACT_APP_API_URL + id
        console.log(id)
        try{
            const reduceMerchResponse = await fetch(url,{
                method: 'DELETE'
            })

            const createMerchJson = await reduceMerchResponse.json()
            console.log(createMerchJson)
            fetchData()
            }catch(err){
                console.log('Error with buy merch: ',err)
        }
    }

    // update quantity U
    const buyMerch = async (id) =>{
        const url =process.env.REACT_APP_API_URL + 'buy/' + id
        console.log(id)
        try{
            const buyMerchResponse = await fetch(url,{
                method: 'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },
            })
            const buyMerchJson = await buyMerchResponse.json()
            console.log(buyMerchJson)
            fetchData()
            }catch(err){
                console.log('Error with buy merch: ',err)
        }
    }
    return(
        <div class='container'>
            <h1 class='header_title'>Merch</h1>

                <ul class='card-container'>
                    {merch.map(item =>(

                            <td key={item._id} class='card'>
                                <img src={item.img}/>

                                <h2>{item.name}</h2>
                                <p><small>{item.type}</small></p>
                                <h3>Quantity: {item.quantity}</h3>
                                <h3>${item.price}</h3>
                                <div class='btn-div'>
                                    <button type='submit' class='add-to-cart' onClick={()=> {removeMerch(item._id)}}>Delete</button>
                                    <button class='add-to-cart' onClick={()=>{props.addToCart(item._id)}}>Add To Cart</button>
                                </div>
                            </td>

                    ))}
                </ul>
                <AddMerch fetchData={fetchData}/>
            <div>
                <h1>Cart:</h1>
                    <ul class='card-container'>
                        {props.cart.map(item =>(

                                <td key={item._id} class='card'>
                                    <h2>{item.name}</h2>
                                    <h3>Quantity: {item.quantity}</h3>
                                    <h3>${item.price}</h3>

                                </td>


                        ))}
                    </ul>
                    <div class='btn-div'>
                        <button class='add-to-cart' onClick={()=>{props.emptyCart()}}>Buy Cart</button>
                    </div>
            </div>

        </div>
    )


}
