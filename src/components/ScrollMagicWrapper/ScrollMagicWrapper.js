import React, {Component} from 'react';

import ScrollMagic from 'scrollmagic';
//import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';

class ScrollMagicWrapper extends Component {

    componentDidMount() {
        this.controller = new ScrollMagic.Controller();

        this.scene = new ScrollMagic.Scene({
            duration: 100,
            offset: 50
        })
            .setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5})
            .addTo(this.controller);
    }

    render () {
        return (
            <div ref={elm => this.elm = elm}>
                {this.props.children}
            </div>
        )
    }
}


//
// export const withContext = (ComposedComponent) => {
//
//     class ContextComponent extends Component {
//         render(){
//             return (
//                 <AppContext.Consumer>
//                     {
//                         context => {
//                             return (
//                                 <ComposedComponent {...this.props} {...context}>
//                                     {this.props.children}
//                                 </ComposedComponent>
//                             );
//                         }
//                     }
//                 </AppContext.Consumer>
//             )
//         }
//     }
//
//     return ContextComponent;
//
// };

export default ScrollMagicWrapper;