import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



export default function Merch(props){
    const url = `http://localhost:8000/${props.match.params.id}`;
        useEffect(() =>{
            fetchData()
            console.log(props.match.params.id)
        },[]);

    const [item, setItem] = useState({})

    // gets merch data
    const fetchData = async () =>{
        try{
            const data = await fetch(url);
            const allMerch = await data.json();
            console.log('All Merch '+ allMerch)
            setItem(allMerch)
        } catch(err){
            console.log('Error getting Merch data', err)
        }
        console.log({item})
    }

    return(
        <div class='container'>
            <h1>Merch</h1>
            <img src={item.img} width='50%'/>
            <h1>{item.name}</h1>
            <p><small>Type: {item.type}</small></p>
            <p>{item.description}</p>
            <h2>Qunatity: {item.quantity}</h2>
            <h3>Price: ${item.price}</h3>
            <div class='btn-div'>
                <Link>
                    <button type='button' class='add-to-cart'>Add to Cart</button>
                </Link>
            </div>
        </div>
    )

}
