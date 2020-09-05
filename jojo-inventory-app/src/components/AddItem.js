import React from 'react'
import tile from '../images/tile.jpg';

export default class AddItem extends React.Component{

    addItem = (e) => {
        e.preventDefault()
        const getItem = e.target.elements
        console.log(getItem);
        //const retrievedItem = this.props.addItem(getItem)

        //this.setState(() => ({error}))
    
    }

    render() {
        return (
            <div>
                 <form onSubmit={this.addItem}>
                    <input type="text"/>
                    <button>Add Item</button>
                </form>
                <div>
                <ul>
                    {/* <li>{retrievedItem}</li> */}
                    <li>Tea</li>
                    <li>Milk</li>

                    <img src={tile} alt="generic food" />
                </ul>
                </div>
            </div>
        )
    }
}