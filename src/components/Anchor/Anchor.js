import React from 'react';

const AnchorLink = props => {
    return (
        <span className="anchor-effect">
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <span data-hover={props.label}>
                    {props.label}
                </span>
            </a>
        </span>
    )
};

export default AnchorLink;