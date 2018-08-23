import React, { Component } from 'react';

const AppContext = React.createContext();

class Context extends Component {
    state = {
        activeNav: 'start',
        navigationIsOpened: false,
        sectionsData: []
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
                updateNavItem: name => {
                    this.setState({
                        activeNav: name
                    })
                },
                updateSectionsData: data => {
                    this.setState(s => {

                        let index = null;

                        s.sectionsData.forEach((sectionItem, i) => {
                            console.log(sectionItem.name === data.name);
                            if(sectionItem.name === data.name) {
                                index = i;
                            }
                        });

                        if(index) {
                            return {
                                sectionsData: [...s.sectionsData.slice(0, index), data, ...s.sectionsData.slice(index + 1)]
                            }
                        } else {
                            return {
                                sectionsData: [...s.sectionsData, data]
                            }
                        }

                    })
                }
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    };
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
