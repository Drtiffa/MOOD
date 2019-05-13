import React from 'react'

import shape1 from '../../../images/shape/shape1.svg';
import shape2 from '../../../images/shape/shape2.svg';
import shape3 from '../../../images/shape/shape3.svg';

const LeftChoiceShape = () => {
    return (
        <div className="left_choice" id="show_shape">
            <ul className="choice_liste">
                <li className="choice_element element_1">
                <img src={shape1} alt="shape1"></img></li>
                <li className="choice_element element_2"><img src={shape2} alt="shape2"></img></li>
                <li className="choice_element element_3"><img src={shape3} alt="shape3"></img></li>
            </ul>
        </div>
    )
}

export default LeftChoiceShape