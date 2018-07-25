import React, { Component } from 'react';
import './Form.css';

// const input = {
//     padding: '10px',
//     border: '2px solid #FFF',
//     width: '165px',
// };

// const btn = {
//     padding: '10px',
//     fontSize: '16px',
//     margin: '10px',
//     marginRight: '0px',
//     backgroundColor: '#0066FF',
//     color: '#FFF',
//     border: '2px solid #0066FF',




// }

class Form extends Component {

    state = {
        login: '',
        password: ''
    }



    // changeLoginInput = (e) => {

    //     const value = e.target.value;

    //     this.setState({
    //         login: value,
    //     })
    // };

    // changePasswordInput = (e) => {

    //     const value= e.target.value;

    //     this.setState({
    //         password: value,
    //     })
    // };

    changeInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
          [name]:value,
        })
    }

    send = (e) => {
        e.preventDefault();
        console.log('test');
    };

    render() {
        return (
            <form onSubmit={this.send} className ='input' >
                <input type="text"
                    name='login'
                    placeholder='Your login'
                    value={this.state.login}
                    onChange={this.changeInput} />
                <input type="password"
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.changeInput} />
                <button type='submit' className ='btn'>submit</button>
            </form>

        )

    }
}

export default Form;