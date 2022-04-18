import React from 'react'

const Category = ({category, filterCategory}) => {    
    
    return (
        <article>
            {console.log(category)}                 
            <button className='btn' onClick={() => filterCategory(category)}>
                {/* {console.log(category)} */}
                {category}                
            </button>       
        </article>
    )
}

export default Category