import React, {Component} from 'react';
// import PropTypes from 'prop-types';


class NewCounter extends Component{

    // constructor(){
    //     super();

    //     this.state = {
    //         counterStart:0,
    //     };
    //  this.plus = this.plus.bind(this);
    //  this.minus = this.minus.bind(this);

    // }

    state = {
        
        counterStart: 0,
    };

    plus = () => {
        // console.log('plus');
        // console.log(this);
        // this.setState({
        //     counterStart: this.state.counterStart+1
        // })

        this.setState(prevState => ({counterStart: prevState.counterStart+1}))
    }

    minus = () => {

        this.setState(prevState => ({counterStart: prevState.counterStart-1}))

       
    };

    // static propTypes = {
    //     start: PropTypes.number,

    // };

    // static defaultProps = {
    //     start: 100,
    // }

    render() {
        
       const {counterStart} = this.state;
        return (
            <div>
                <p>{counterStart}</p>
                <button onClick={this.plus} >plus</button>
                <button onClick={this.minus} >minus</button>
            </div>
        )
    }
}

export default NewCounter;