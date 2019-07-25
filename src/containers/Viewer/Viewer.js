import React, {Component} from 'react';
import {withContext} from "../../Context";

class Viewer extends Component {

    componentDidMount() {
        this.props.toggleDrawer();

        this.readDirectory();
    }

    readDirectory = () => {

        fetch("../images/portfolio/artident/*")
            .then(res => res)
            .then(result => {
                console.log(result);
            });

    }

    render() {
        console.log(this.props.match.params);
        return (
            <div className={`viewer`}>
                asdasdqweqweqwezxczxczxc {this.props.name}
            </div>
        )
    }
}

export default withContext(Viewer);