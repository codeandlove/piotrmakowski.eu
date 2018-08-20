import React from 'react';

const Panel = props => {

    const HaderContent = () => {
    
        if(!props.header) return null;

        const headerClasses = `panel-header ${props.headerClasses || ''}`;

        switch(props.headerTag) {
            case 'h1':
            return (
                <h1 className={headerClasses}>
                    {props.header}
                </h1>
            );
            case 'h2':
            return (
                <h2 className={headerClasses}>
                    {props.header}
                </h2>
            );
            case 'h3':
            return (
                <h3 className={headerClasses}>
                    {props.header}
                </h3>
            );
            case 'h4':
            return (
                <h4 className={headerClasses}>
                    {props.header}
                </h4>
            );
            case 'h5':
            return (
                <h5 className={headerClasses}>
                    {props.header}
                </h5>
            );
            default:
            return (
                <h3 className={headerClasses}>
                    {props.header}
                </h3>
            );

        }
    }

    return (
        <div className={`panel ${props.classes || ''}`}>
            <HaderContent />
            
            {
                (props.children) ? (
                    <div className={`panel-content ${props.contentClasses || ''}`}>
                        {props.children}
                        {
                            (props.actions) ? (
                                <p className={`panel-actions ${props.actionsClasses || ''}`}>
                                    {props.actions}
                                </p>
                            ) : null
                        }
                    </div>
                ) : null
            }
            
        </div>
    )
}

export default Panel;