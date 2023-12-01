import React from 'react'

function CategoryCard(props) {
    return (
        <>
        <div>
            <img src={props.image} alt={props.name} srcset="" />
            <h1>{props.name}</h1>
        </div>
        </>
    )
}

export default CategoryCard
