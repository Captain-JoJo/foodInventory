import React from 'react';
import './styles/App.css';
import AddItem from './components/AddItem'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Inventory App</h1>
        
        <div>
         
          <AddItem/>
          
        </div>
        
      </header>
    </div>
  );
}


//import { makeStyles } from '@material-ui/core/styles';
//import { Button, Box, ListItem } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
// }));

// const tileData = [
//   {
//     img: 'src/images/tile.jpg',
//     title: 'testing image',
//     author: 'maybe the writer',
//     cols: 2,
//   }
// ];


  //const classes = useStyles();

  // state = {
  //   items: []
  // }

  // componentDidMount() {
  //   try {
  //     const json = localStorage.getItem('items')
  //     const items = JSON.parse(json)
  //     if(items){
  //       this.setState(() => ({items}))
  //     }
  //   } catch (error) {
      
  //   }
  // }