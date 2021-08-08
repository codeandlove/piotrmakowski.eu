import React, { Component } from 'react';
import data from './data/data.json';
const AppContext = React.createContext();

class Context extends Component {
    state = {
        activeNav: 'start',
        navigationIsOpened: false,
        drawerIsOpened: false,
        sectionsData: [],
        portfolio: data,
        portfolioActiveItem: []
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
                toggleDrawer: (val) => {
                    this.setState(s => {
                        return {
                            drawerIsOpened: !!val ? val : !s.drawerIsOpened
                        }
                    })
                },
                updateNavItem: name => {
                    console.log(name);
                    this.setState({
                        activeNav: name,
                        navigationIsOpened: false
                    })
                },
                updateSectionsData: data => {
                    this.setState(s => {
                        let index = null;
                        s.sectionsData.forEach((sectionItem, i) => {
                            if(sectionItem.name === data.name) {
                                index = i;
                            }
                        });

                        if(index !== null) {
                            return {
                                sectionsData: [...s.sectionsData.slice(0, index), data, ...s.sectionsData.slice(index + 1)]
                            }
                        } else {
                            return {
                                sectionsData: [...s.sectionsData, data]
                            }
                        }
                    });
                },
                setActivePortfolioItem: data => {
                    const {match: {params: {href} }, portfolio} = data;
                    const result = portfolio.filter(item => item.href === href)[0];

                    this.setState({
                        portfolioActiveItem: result || []
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
