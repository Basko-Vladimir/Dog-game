import React from "react";
import image from "../../assets/dog.jpg";

const Item = (props) => {
    return (
        <div className={'item'} onClick={props.catchDog}>
            <img src={image} alt="photoDog" className={props.classItem}/>
        </div>
    )
};

export default Item;
