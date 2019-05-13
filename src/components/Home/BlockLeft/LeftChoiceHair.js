import React from 'react'

import hair1 from '../../../images/hair/hair1.svg';
import hair2 from '../../../images/hair/hair2.svg';
import hair3 from '../../../images/hair/hair3.svg';
import hair4 from '../../../images/hair/hair4.svg';
import hair5 from '../../../images/hair/hair5.svg';
import hair6 from '../../../images/hair/hair6.svg';
import hair7 from '../../../images/hair/hair7.svg';

const LeftChoiceHair = () => {
    return (
        <div className="left_choice" id="show_hair">
            <ul className="choice_liste">
                <li className="choice_element element_12"><img src={hair1} alt="hair1"></img></li>
                <li className="choice_element element_13"><img src={hair2} alt="hair2"></img></li>
                <li className="choice_element element_14"><img src={hair3} alt="hair3"></img></li>
                <li className="choice_element element_15"><img src={hair4} alt="hair4"></img></li>
                <li className="choice_element element_16"><img src={hair5} alt="hair5"></img></li>
                <li className="choice_element element_17"><img src={hair6} alt="hair6"></img></li>
                <li className="choice_element element_18"><img src={hair7} alt="hair7"></img></li>
            </ul>
        </div>
    )
}

export default LeftChoiceHair