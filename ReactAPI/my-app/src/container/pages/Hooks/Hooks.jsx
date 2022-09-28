import React, {Component} from 'react';
import { useEffect } from 'react';
import './Hooks.css';

//// konsep statefull (digabung)
// class Hooks extends Component {
//     state ={
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     /// lifecycle React
//     // menambahkan
//     componentDidMount() {
//         document.title = `Title Change: ${this.state.count}`;
//     }

//     // update
//     componentDidUpdate() {
//         document.title = `Title Change: ${this.state.count}`;
//     }

//     // ketika dicabut
//     componentWillUnmount() {
//         document.title = "React Js Hello World";
//     }

//     render() {
//         return (
//         <div className='p-hooks'>
//             <p>Nilai Saya saat ini adalah : {this.state.count}</p>
//             <button onClick={this.onUpdate}>Update Nilai</button>
//         </div>
//         );
//     }
// }


/// Konsep stateless component (Tidak bisa digabung dengan nilai yang berubah)
const Hooks = () => {
    const [count, setCount] = React.useState(0);

    /// ada lifecycle(1. didmount, 2. didupdate, 3. willunmount)
    useEffect(() =>  {
        document.title = `Title Change: ${count}`;
        return () => {
            document.title = "React Js Hello World";
        }
    })
    return (
        <div className='p-hooks'>
        <p>Nilai Saya saat ini adalah : {count}</p>
        <button onClick= {() => setCount(count + 1)}>Update Nilai</button>
    </div>
    )
}

export default Hooks; 