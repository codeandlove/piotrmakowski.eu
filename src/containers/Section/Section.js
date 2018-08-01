import React from 'react';

const Section = (props) => {
    return (
        <section id={props.name} >
            <div className="container">
                {props.content}
            </div>
        </section>
    )
};

export default Section;