import React, {Component} from 'react';

class Me extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interval: 0,
            persons: 3,
            duration: 5000,
            movement: {
                y: 0
            }
        };

        this.timeInterval = null;
        this.movementInterval = null;
    }

    componentDidMount() {
        this.runIntervals();
    }

    componentWillUnmount() {
       this.clearIntervals();
    }

    runIntervals = () => {
        if(!!this.timeInterval || !!this.movementInterval ) return;

        const {duration} = this.state;
        let step = 0;

        this.timeInterval = setInterval(() => {
            this.setState(s => {
                if(s.interval === s.persons - 1) {
                    return {
                        interval: 0
                    }
                } else {
                    return {
                        interval: s.interval + 1
                    }
                }
            });
        }, duration);

        this.movementInterval = setInterval( () => {
            step += .35;
            let y = Math.sin(step) * 10;
            this.setState({
                movement: {
                    y: y
                }
            })
        }, 200);
    }

    clearIntervals = () => {
        clearInterval(this.timeInterval);
        clearInterval(this.movementInterval);

        this.timeInterval = 0;
        this.movementInterval = 0;
    }

    render() {
        const {persons, interval, movement, isMobile} = this.state;
        const {mouse} = this.props;

        const style = !!mouse ? {
            transform:  `translate(${mouse.x}%, ${mouse.y}%)`
        } : {};

        const movementStyles = {
            transform:  `translateY(${movement.y}px)`
        }

        return (
            <div className={`me-layer me-interval-${interval}`} style={style}>
                {
                    [...Array(persons)].map((x, i) => {
                        return (
                            <div className={`me-person me-person-${i}`} key={`me-person-${i}`} style={movementStyles} />
                        )
                    })
                }
            </div>
        )
    }
};

export default Me;