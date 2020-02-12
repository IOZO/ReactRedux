import React from 'react'

const Article = (props) =>
{
    return(
        <div>{props.data.quantity} {props.data.name}</div>
    )
}

export default Article;