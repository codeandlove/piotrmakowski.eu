import React from 'react';

const Section = (props) => {
    return (
        <section id={props.name} className={props.classes}>
            {props.content}
        </section>
    )
};

export default Section;