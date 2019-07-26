import React from 'react';
import './Avatar.css';
import 'tachyons';
const Avatarlist = (props)  =>{
    return <div className='avatarstyle ma4 bg-light-purple dib pa2 grow tc' >
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="USer"></img>
            <h1 > {props.name} </h1>
            <p> {props.work} </p>
           </div>
}

export default Avatarlist;