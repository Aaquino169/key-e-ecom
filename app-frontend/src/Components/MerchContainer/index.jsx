import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AddMerch from '../AddMerch'



export default function CardComponent(props){
    const url = 'http://localhost:8000/';
    const [merch, setMerch] = useState([])
    const [addedMerch, insertMerch] = useState([])

    useEffect(() =>{
        fetchData()
    },[]);

    // gets merch data
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

    const addMerch = async (createMerch) => {
        try{
            const createMerchResponse = await fetch(url,{
                method: 'POST',
                header: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(createMerch)
            })
            const createMerchJson = await createMerchResponse.json()
            if (createMerchResponse.status === 201 || createMerchResponse.status === 200 ){
                insertMerch(createMerchJson.data)
            }
        } catch(err){
            console.log('Error adding Merch', err)
        }
    }

    return(
        <div class='container'>
            <h1>Merch</h1>
            <ul class='card-container'>
                {merch.map(item =>(

                        <td class='card'>
                            <img src={item.img}/>

                            <Link to={`/merch/${item._id}`}>
                                <h1>{item.name}</h1>
                            </Link>
                            <p><small>{item.type}</small></p>
                            <h3>${item.price}</h3>
                            <div class='btn-div'>
                                <Link>
                                    <button type='button' class='add-to-cart'>Add to Cart</button>
                                </Link>
                            </div>
                        </td>


                ))}
            </ul>
            < AddMerch />
        </div>
    )

}
