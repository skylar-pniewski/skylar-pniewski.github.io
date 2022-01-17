import React from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("render portfolio");
        return <div>
            Welcome to my portfolio!
        </div>
    }
}

// const domContainer = document.querySelector('#rendertarget')
// ReactDOM.render(e(Portfolio), domContainer)

export default Portfolio;