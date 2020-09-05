import React from 'react';
import ReactDOM from 'react-dom'
import './styles/App.css';
import tile from './images/tile.jpg';
import AddItem from './components/AddItem'

export default function App() {
  
  const app = {
    itemName: 'Coffee',
    itemQuantity: 6,
    items: []
  }
  const onItemFormSubmit = (e) => {
    e.preventDefault()
    const item = e.target.elements.item.value
    console.log(item);
    
    if(item){
        app.items.push(item)
        e.target.elements.getItem.value = ''
    }
  }
  const appRoot = document.getElementById('root')

  const render = () => {
    const template = (
      <div className="App-header">
        <h1>Food Inventory App</h1>
        <p>{app.items.length > 0 ? 'Here are your items': 'No items'}</p>
        <p>{app.items.length}</p>
        <form onSubmit={onItemFormSubmit}>
            <input type="text" name="item"/>
            <button>Add Item</button>
        </form>
        <ol>
            <li>{app.itemName}</li>
            <li>{app.itemQuantity}</li>
            <br></br>
            <img src={tile} alt="generic food" />
        </ol>
      </div>
    )
    ReactDOM.render(template, appRoot)
  }

render()
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}