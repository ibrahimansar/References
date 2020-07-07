import React, {Component} from 'react';
import axios from '../axios-orders';
import Dbdata from './dbdata';

class Dbget extends Component {
    state = {
        users: [],
    };

    componentDidMount() {
        axios.get('/user.json').then (response => {
            console.log(response.data);
            const fetchedResults = [];
            for(let key in response.data){
                fetchedResults.push(
                    {
                        ...response.data[key],
                        id: key
                    }                    
                )
            }
            this.setState({users: fetchedResults})
        })
    }
    render() {
        return (
            <div>
                {this.state.users.map((user) => {
                    <Dbdata 
                    key={user.id}
                    name={user.name}
                    roll={user.roll} />                                     
                })}
            </div>
        )
    }
}


export default Dbget;