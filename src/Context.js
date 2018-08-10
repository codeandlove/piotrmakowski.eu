import React, { Component } from 'react';

const AppContext = React.createContext();

class Context extends Component {
    state = {
        activeNav: 0,
        navigationIsOpened: false
    };

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                toggleNavigation: () => {
                    this.setState(s => {
                        return {
                            navigationIsOpened: !s.navigationIsOpened
                        }
                    })
                },
                updateNavItem: i => {
                    this.setState({
                        activeNav: i
                    })
                }
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export const withContext = (ComposedComponent) => {

    class ContextComponent extends Component {
        render(){
            return (
                <AppContext.Consumer>
                    {
                        context => {
                            return (
                                <ComposedComponent {...this.props} {...context}>
                                    {this.props.children}
                                </ComposedComponent>
                            );
                        }
                    }
                </AppContext.Consumer>
            )
        }
    }

    return ContextComponent;

};

export default Context;
