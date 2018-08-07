import React, {Component} from 'react';

class Me extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interval: 0,
            persons: 3,
            duration: 5000
        };

        this.timeInterval = null;
    }

    componentDidMount() {
        const {duration} = this.state;

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
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    render() {
        const {persons, interval} = this.state;
        const {mouse} = this.props;

        const style = {
            transform:  `translate(${mouse.x}%, ${mouse.y}%)`
        };

        return (
            <div className={`me me-interval-${interval}`} style={style}>
                {
                    [...Array(persons)].map((x, i) => {
                        return (
                            <div className={`me-person me-person-${i}`} key={`me-person-${i}`} />
                        )
                    })
                }
            </div>
        )
    }
};

export default Me;