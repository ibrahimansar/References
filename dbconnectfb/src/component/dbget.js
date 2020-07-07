// import React, {Component} from 'react';
// import axios from 'axios';

// class Dbget extends Component {
//     state = {
//         name: '',
//         age: '',
//         Country          
//     };

//     componentDidMount() {
//         axios.get('https://vehicle-garage.firebaseio.com').then (res => {
//             console.log(res);
//             this.setState({persons : res.data});
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.state.persons.map(person => <li>{person.name}</li>)}
//                 </ul>
//             </div>
//         )
//     }
// }


// export default Dbget;