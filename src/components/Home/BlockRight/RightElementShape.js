import React from 'react'

import shape1 from '../../../images/shape/shape1.svg';
import shape2 from '../../../images/shape/shape2.svg';
import shape3 from '../../../images/shape/shape3.svg';

const RightElementShape = () => {
    return (
        <div className="right_element element-shape">
            <img className="right_image" id="element_1" src={shape1} alt="shape1"></img>
            <img className="right_image" id="element_2" src={shape2} alt="shape2"></img>
            <img className="right_image" id="element_3" src={shape3} alt="shape3"></img>
        </div>
    )
}

export default RightElementShape