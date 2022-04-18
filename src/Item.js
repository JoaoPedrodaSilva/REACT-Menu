import React from 'react'

const Item = ({title, price, img, desc}) => {    
    
    return (
        <article className='item'>
            <div className='title-and-price'>
                <div className='item-title'>
                    <h1>{title}</h1>
                </div>
                <div className='item-price'>
                    <h1>{price}</h1>
                </div>
            </div>
            <div className='item-info'>  
                <img src={img} alt={title} />                          
                <p>{desc}</p>
            </div>
        </article>
    )   
}

export default Item