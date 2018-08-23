import React, {Component} from 'react';

const data = [
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    }
    /*
    ,
    {
        title: 'c05m05.com',
        name: 'c05m05',
        href: 'c05m05'
    },
    {
        title: 'klubobsesja.pl',
        name: 'obsesja',
        href: 'obsesja'
    },
    {
        title: 'najatkach.pl',
        name: 'najatkach',
        href: 'najatkach'
    }
*/

];

class PortfolioThumb extends Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.onMouseMove );
    }

    onMouseMove = event => {
      console.log(event, this);

        if(event.clientX > this.elm.offsetLeft) {
            console.log('right');
        } else {
            console.log('left');
        }

        if(event.clientY > this.elm.offsetTop) {
            console.log('Top');
        } else {
            console.log('Bottom');
        }
    };

    render() {
        const {name, title, href} = this.props;

        return (
            <div className="portfolio-thumb" ref={elm => this.elm = elm}>
                <div className="thumb-wrapper">
                    <img src={`images/portfolio/${name}/cover.jpg`} alt={title} />
                    <div className="thumb-description">
                        {title}
                    </div>
                </div>
            </div>
        );
    }
}

const Portfolio = () => {
    return (
        <div className="container">
            <h3 className="text-align-center">
                <span className="hand-written white">
                    Things which has been done
                </span>
            </h3>
            <div className="portfolio">
                {
                    data.map((props, key) => {
                        return <PortfolioThumb {...props} key={`thumb-item-${key}`} />
                    })
                }
            </div>
        </div>
    )
};

export default Portfolio;