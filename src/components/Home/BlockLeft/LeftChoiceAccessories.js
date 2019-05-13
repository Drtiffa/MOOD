import React from 'react'

import accessorie1 from '../../../images/accessories/accessorie1.svg';
import accessorie2 from '../../../images/accessories/accessorie2.svg';
import accessorie3 from '../../../images/accessories/accessorie3.svg';
import accessorie4 from '../../../images/accessories/accessorie4.svg';
import beard1 from '../../../images/accessories/beard1.svg';
import beard2 from '../../../images/accessories/beard2.svg';
import beard3 from '../../../images/accessories/beard3.svg';

const LeftChoiceAccessories = () => {
    return (
        <div className="left_choice" id="show_accessories">
            <ul className="choice_liste">
                <li className="choice_element element_19"><img src={accessorie1} alt="accessorie1"></img></li>
                <li className="choice_element element_20"><img src={accessorie2} alt="accessorie2"></img></li>
                <li className="choice_element element_21"><img src={accessorie3} alt="accessorie3"></img></li>
                <li className="choice_element element_22"><img src={accessorie4} alt="accessorie4"></img></li>
                <li className="choice_element element_23"><img src={beard1} alt="beard1"></img></li>
                <li className="choice_element element_24"><img src={beard2} alt="beard2"></img></li>
                <li className="choice_element element_25"><img src={beard3} alt="beard3"></img></li>
            </ul>
        </div>
    )
}

export default LeftChoiceAccessories