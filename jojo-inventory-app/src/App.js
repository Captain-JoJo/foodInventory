import React from 'react';
import ReactDOM from 'react-dom'
import './styles/App.css';
import AddItem from './components/AddItem'
import tile from './images/tile.jpg';

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
      //render()
  }
}
const appRoot = document.getElementById('root')
const template = (
  <div className="App">
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
</div>
)

export default function App() {
  return (
    ReactDOM.render(template, appRoot)
  );
}