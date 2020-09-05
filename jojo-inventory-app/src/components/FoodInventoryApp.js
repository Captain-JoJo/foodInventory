import React from 'react'
import AddItem from './AddItem'

export default class FoodInventoryApp extends React.Component{
    constructor(props){
        super(props)
        this.handleAddItem = this.handleAddItem.bind(this)
        this.state ={
            items: []
        }
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('items')
            const items = JSON.parse(json)

            if(items){
                this.setState(() => ({items}))
            }
        } catch (error) {
            //Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.items.length !== this.state.items.length){
            const json = JSON.stringify(this.state.items)
            localStorage.setItem('items', json)
        }
    }
    componentWillMount(){
        console.log('componenetWillMount');
    }
    handleAddItem(item){
        if(!item){
            return 'Enter valid value to add item'
        } else if (this.state.items.indexOf(item)>-1){
            return 'This option already exists'
        }

        this.setState((prevState) =>({
            options: prevState.items.concat(item)
        }))
    }

}