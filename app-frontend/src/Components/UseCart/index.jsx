import React from 'react'
import {useState} from 'react'

export default function UseCart(props){
    const [isShowing, setIsShowing] = useState(false);

    function toggle(){
        setIsShowing(!isShowing)
    }

    return{
        isShowing,
        toggle,
    }
}
