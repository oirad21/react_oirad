import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusHexagon } from '@fortawesome/pro-solid-svg-icons';

import { Header } from '../components/Header';
import { Home } from '../components/Home';

import { addNumber } from '../actions/mathActions';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = { posts: [] };

        let options = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            mode: 'cors'
        };

        fetch('http://oirad.pro/reactapi/users/get/all', options)
            .then(response => response.json())
            .then(posts => this.setState({posts: posts.records}));


    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Home result={this.props.math.result} />
                        <br />
                        <button onClick={() => {this.props.addNumber(10)}} className="btn btn-primary">
                            <FontAwesomeIcon icon={faPlusHexagon} />&nbsp;
                            Add 10
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

// map state variables to props variables
const mapStateToProps = state => {
    return {
        // state.math is the mathReducer
        math: state.math
    };
};

// map dispatch functions to props
const mapDispatchToProps = dispatch => {
    return {
        addNumber: (number) => {
            dispatch(addNumber(number));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
