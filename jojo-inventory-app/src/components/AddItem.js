import React from 'react'
import tile from '../images/tile.jpg';

const app = {
    itemName: 'Coffee',
    itemQuantity: 6,
    items: []
}

const onItemFormSubmit = (e) => {
    e.preventDefault()
    const getItem = e.target.elements.item.value
    console.log(getItem);
    
    if(getItem){
        app.items.push(getItem)
        e.target.elements.getItem.value = ''
    }
}


export default class AddItem extends React.Component{
    render() {
        return (
            <div>
                <form onSubmit={onItemFormSubmit}>
                    <input type="text" name="item"/>
                    <button>Add Item</button>
                </form>
                <p>{app.items.length}</p>
                <ul>
                    <li>{app.itemName}</li>
                    <li>{app.itemQuantity}</li>
                    <br></br>
                    <img src={tile} alt="generic food" />
                </ul>
            </div>
        )
    }
}