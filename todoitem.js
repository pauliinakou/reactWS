import React, { Component } from 'react';

const style = {
    padding: "1px",
    fontFamily: "verdana",
    textAlign: "center"
  };

export default class Item extends Component {
    render() {
        
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <li className="list-group-item d-flex justify-content-between my-0 mx-2 ">
                
                <h5 style={style}>{title}</h5>
                
                <div className="todo">
                    <button className="mx-2 btn btn-outline-warning" onClick={handleEdit}>Edit
                    </button>
                    <button className="mx-2 btn btn-outline-danger" onClick={handleDelete}>Delete
                    </button>
                </div>
            </li>
        )
    }
}
//buttonit saa funktioiden toiminnalisuudet todo.js:stä