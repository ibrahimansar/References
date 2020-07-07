import React, {Component} from 'react';
import axios from '../axios-orders';
import classes from './dbpost.module.css';

class Dbpost extends Component {
    state = {
        name: '', 
        roll: ''
    }

    postDataHandler = () => {
        const info = {
            name: this.state.name,
            roll: this.state.id
        }
        axios.post('/user.json', info)
        .then(response => {
            console.log(response);
        });
    }

render () {
    return (
        <div className={classes.NewPost}>
            <h1>Add a Post</h1>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={( event ) => this.setState( { name: event.target.value } )} />
            <label>roll</label>
            <textarea rows="4" value={this.state.id} onChange={( event ) => this.setState( { id: event.target.value } )} />
            <button onClick={this.postDataHandler}>Add user</button>
        </div>
    );
}
}



export default Dbpost;