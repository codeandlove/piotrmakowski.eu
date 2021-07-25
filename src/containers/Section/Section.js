import React, {Component} from 'react';
import Waypoint from 'react-waypoint';

import { withContext } from './../../Context';

class Section extends Component {
    constructor(props) {
        super(props);
        this.sectionRef = React.createRef();
    }

    componentDidMount() {
        this.updateSectionData();
        window.addEventListener('resize', this.updateSectionData, false);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSectionData, false);
    }

    updateSectionData = () => {
        const {name} = this.props;
        this.props.updateSectionsData({
            name: name,
            data: this.sectionRef.current.getBoundingClientRect()
        });
    }

    render() {
        const {name, classes, content} = this.props;

        return (
            <section id={name} ref={this.sectionRef} className={`section-${name} ${classes ? classes : ''}`}>
                <Waypoint onEnter={() => this.props.updateNavItem(name)}>
                    <div className="section-wrapper">
                        {content}
                    </div>
                </Waypoint>
            </section>
        )
    }
}

export default withContext(Section);