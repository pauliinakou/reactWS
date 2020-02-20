import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                
                    <input type="text" className="form-control form-control-lg" placeholder="Details of the position" value={item} onChange={handleChange}/>
                    <button type="submit" 
                    className={
                    editItem ? "mx-2 btn btn-outline-warning" : "mx-2 btn btn-success"
                    }>
                    {editItem ? 'Done' : 'Add'} 
                    </button>
                </div>
            </form>
        </div>
        )
    }
}
//conditional rendering rivillä 13, katsoo onko editItem true vai false, jos true = Done, jos false = Add, 
//samoin rivin 12 button saa tiedon onko editItem true vai false, tyyli erilainen eri tapauksissa
//kun formia muokataan, käytetään toiminnallisuutta handleChange todo.js:stä