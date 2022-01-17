import React from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

class Unity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'YOu liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true })},
            'Like'
        );
    }
}

// const domContainer = document.querySelector('#rendertarget')
// ReactDOM.render(e(Unity), domContainer)

export default Unity;