import React, {Component} from 'react';

const data = [
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    },
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
    },
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    },
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
    },
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    },
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
    },
    {
        title: 'najatkach.pl',
        name: 'najatkach',
        href: 'najatkach'
    },
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    },
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
    },
    {
        title: 'najatkach.pl',
        name: 'najatkach',
        href: 'najatkach'
    },
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    },
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
    },
    {
        title: 'najatkach.pl',
        name: 'najatkach',
        href: 'najatkach'
    },
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    },
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
    },
    {
        title: 'najatkach.pl',
        name: 'najatkach',
        href: 'najatkach'
    },
    {
        title: 'Panoramed',
        name: 'panoramed',
        href: 'panoramed'
    },
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
];

class PortfolioThumb extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dir: 'from-top'
        }
    }

    componentDidMount() {
        this.elm.addEventListener('mousemove', e => this.onMouseMove(e) );
    }

    onMouseMove = event => {

        const getDirection = function (ev, obj) {
            const w = obj.offsetWidth,
                h = obj.offsetHeight,
                x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
                y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1));

            return Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
        };

        this.setState(s => {

            let tmp = s.dir;

            switch(getDirection(event, this.elm)) {
                case 0:
                    tmp = 'from-top';
                    break;
                case 1:
                    tmp = 'from-right';
                    break;
                case 2:
                    tmp = 'from-bottom';
                    break;
                case 3:
                    tmp = 'from-left';
                    break;
            }

            return {
                dir: tmp
            }
        })
    };

    render() {
        const {name, title, href} = this.props;
        const {dir} = this.state;

        return (
            <div className="portfolio-thumb" ref={elm => this.elm = elm}>
                <div className="thumb-wrapper">
                    <img src={`images/portfolio/${name}/cover.jpg`} alt={title} />
                    <div className={`thumb-description ${dir}`}>
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