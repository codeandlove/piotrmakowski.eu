import React, { Component } from 'react';

export const AppContext = React.createContext();

class Context extends Component {
    state = {
        navigationIsOpened: false
    };

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state,
                toggleNavigation: () => {
                    this.setState(s => {
                        return {
                            navigationIsOpened: !s.navigationIsOpened
                        }
                    })
                }
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default Context;
