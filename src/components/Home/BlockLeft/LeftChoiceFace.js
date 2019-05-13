import React from 'react'

import face1 from '../../../images/face/face1.svg';
import face2 from '../../../images/face/face2.svg';
import face3 from '../../../images/face/face3.svg';
import face4 from '../../../images/face/face4.svg';
import face5 from '../../../images/face/face5.svg';
import face6 from '../../../images/face/face6.svg';
import face7 from '../../../images/face/face7.svg';
import face8 from '../../../images/face/face8.svg';

const LeftChoiceFace = () => {
    return (
        <div className="left_choice" id="show_face">
            <ul className="choice_liste">
                <li className="choice_element element_4"><img src={face1} alt="face1"></img></li>
                <li className="choice_element element_5"><img src={face2} alt="face2"></img></li>
                <li className="choice_element element_6"><img src={face3} alt="face3"></img></li>
                <li className="choice_element element_7"><img src={face4} alt="face4"></img></li>
                <li className="choice_element element_8"><img src={face5} alt="face5"></img></li>
                <li className="choice_element element_9"><img src={face6} alt="face6"></img></li>
                <li className="choice_element element_10"><img src={face7} alt="face7"></img></li>
                <li className="choice_element element_11"><img src={face8} alt="face8"></img></li>
            </ul>
        </div>
    )
}

export default LeftChoiceFace