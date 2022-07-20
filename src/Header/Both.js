import React, {useState} from 'react';
import Header from './Header';
import Slider from './Slider';



function Both(){
const [hidden, setHidden] = useState(false);

function handleClick(){
    setHidden(!hidden);
}

function handleTrue(){
    setHidden(false);
}

    return(

<div>
<Header handleClick = {handleClick} hidden = {hidden} handleTrue = {handleTrue} />
<Slider handleClick = {handleClick} hidden = {hidden} />
</div>
    );

}

    


export default Both;