import React from 'react';

const Background = (props) => {

    const style = {backgroundImage: `url(${props.image})`};
    const styleAdd = {
        backgroundImage: `url(${props.add})`,
        backgroundPosition: `${50 - props.mouse.x}% ${50 - props.mouse.y}%`
    };

    return (
        <div className="background" style={style} >
                {
                    (props.add) ? (
                        <div className="add" style={styleAdd} ></div>
                    ) : null
                }
        </div>
    )
};

export default Background;