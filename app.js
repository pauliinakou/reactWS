import React, { Component } from 'react';
import List from './component/todolist';
import Input from './component/todoinput';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class App extends Component {
    state={
        //vanha lista
        items:[],
        //pohjustetaan id uniikiksi, estää sekoittumisen muokkaamisen yhteydessä
        id: uuid(),
        item: "",
        editItem: false
    }
    //uusi item saa arvon, mikä kenttään kirjoitetaan
    handleChange = (e)=>{
        this.setState({
            item:e.target.value
        });
    };

    //mitä tapahtuu, kun painetaan Add Item nappia
    handleSubmit = (e)=>{
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item
        }
        //console.log(newItem);
        
        //päivitetty lista, joka muistaa vanhan listan
        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            // listaa ei voinut kasvattaa automaattisesti lisäämällä numeroon +1, kun käytetään muokkausta tällä tavoin (rivi 70 ja 75)
            id: uuid(),
            editItem: false
        });
    
    };

    
    //tyhjentää listan
    clearList = ()=>{
        this.setState({
            items: []
        });
    };

    handleDelete = id =>{
        //uusi lista, jossa kaikki muut paitsi se, minkä olet poistanut
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState ({
            items: filteredItems
        });
    };

    

    handleEdit = id =>{
        //jättää listaan kaikki paitsi muokattavaksi valitun
        const filteredItems = this.state.items.filter(item => item.id !== id);

        //etsii tietyllä id:llä sen itemin mitä halutaa muokata, ei muuta itemin id:tä vaikka tietoja muuttaisi
        const selectedItem = this.state.items.find(item => item.id === id)
        this.setState ({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        })
        //console.log(id)
    }
    

    render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-center">Add a new applied position</h3>
                    <Input item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
                    <List items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
                </div>
            </div>
        </div>
        
        )
    }
}
