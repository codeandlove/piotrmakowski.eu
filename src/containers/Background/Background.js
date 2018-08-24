import React from 'react';
import {withContext} from "../../Context";

const Background = props => {
    const {image, add, mouse, referTo, sectionsData} = props;

    //find refer component
    const referData = referTo.map(refName => {
        return sectionsData.filter(item => {
            if (item.name === refName) {
                return item;
            }
        });
    });

    let height = window.innerHeight;

    if (referData[0].length) {
        height = 0;
        referData.forEach(item => {
            if (item.length) {
                height += item[0].data.height;
            }
        });
    }

    const style = {
        backgroundImage: `url(${image})`,
        height: height
    };

    const styleAdd = {
        backgroundImage: `url(${add})`,
        backgroundPosition: `${50 + mouse.x}% ${50 + mouse.y}%`
    };

    return (
        <div className="background" style={style}>
            {
                (add) ? (
                    <div className="add" style={styleAdd}></div>
                ) : null
            }
        </div>
    )
};

export default withContext(Background);