import React from 'react';
import ReactDOM from 'react-dom';
import{useState, useEffect} from 'react'


export default function Cart (props){


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
                }catch(err){
                    console.log('Error with buy merch: ',err)
            }
        }

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
                    
                    }catch(err){
                        console.log('Error with buy merch: ',err)
                }
            }




    return(
        <div>
            <h1>Cart:</h1>
                <ul class='card-container'>
                    {props.cart.map(item =>(

                            <td key={item._id} class='card'>
                                <h2>{item.name}</h2>
                                <h3>Quantity: {item.quantity}</h3>
                                <h3>${item.price}</h3>
                                <div class='btn-div'>
                                    <button type='submit' class='add-to-cart' onClick={()=> {removeMerch(item._id)}}>Delete</button>
                                    <button class='add-to-cart' onClick={()=>{buyMerch(item._id)}}>Buy</button>
                                </div>
                            </td>

                    ))}
                </ul>
        </div>
    )

}
