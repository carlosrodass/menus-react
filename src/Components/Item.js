import React from 'react'

const Item = ({
    title,
    category,
    price,
    img,
    desc
}) => {
    return (
        <div className="item-box">
            <div className="cardstyle">
                <div className="image-wrapper">
                    <img className="item-img" src={img}></img>
                </div>
                <div className="info-wrapper">
                    <div className="title-price">
                        <h2 className="title">{title}</h2>
                        <h4 className="price">${price}</h4>
                    </div>
                    <p className="description">{desc}</p>
                </div>

            </div>

        </div>
    )
}

export default Item
