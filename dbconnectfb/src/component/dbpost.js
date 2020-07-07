import React, {Component} from 'react';
import axios from 'axios';

class Dbpost extends Component {
    state = {
        name: '', 
        id: ''
    }

    postDataHandler = () => {
        const info = {
            name: this.state.name,
            id: this.state.id
        }
        axios.post('https://vehicle-garage.firebaseio.com/user', info)
        .then(response => {
            console.log(response);
        });
    }

render () {
    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Name</label>
            <input type="text" value={this.state.name} onChange={( event ) => this.setState( { name: event.target.value } )} />
            <label>ID</label>
            <textarea rows="4" value={this.state.id} onChange={( event ) => this.setState( { id: event.target.value } )} />
            <button onClick={this.postDataHandler}>Add Post</button>
        </div>
    );
}
}



export default Dbpost;