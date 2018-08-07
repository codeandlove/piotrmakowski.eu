import React, {Component} from 'react';

class MouseMovement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movement: {
                x: 0,
                y: 0
            },
            dFactorX: -20,
            dFactorY: 5
        }
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove, true);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.onMouseMove, true);
    }

    onMouseMove = e => {

        const {dFactorX, dFactorY} = this.state;

        const {factorX, factorY} = this.props;

        let x = e.clientX - (window.innerWidth / 2);
        let y = e.clientY - (window.innerHeight / 2);

        const movement = {
            x: (x/window.innerWidth) * (factorX || dFactorX),
            y: (y/window.innerHeight) * (factorY || dFactorY)
        };

        this.setState({
            movement: {...movement}
        });
    };

    render() {
        const {movement: {x, y}} = this.state;
        const {children} = this.props;

        if(children.length > 0) {
            return children.map((child, key) => {
                return React.cloneElement(child, { mouse: {x: x, y: y}, key: `mouse-movement-key-${key}`})
            });
        }

        return React.cloneElement(children, { mouse: {x: x, y: y}});

    }
}

export default MouseMovement;