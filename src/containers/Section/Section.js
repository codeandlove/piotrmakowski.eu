import React from 'react';

const Section = (props) => {
    return (
        <section id={props.name}>
            {props.content}
        </section>
    )
};

export default Section;