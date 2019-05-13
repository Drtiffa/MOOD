import React from 'react'

import accessorie1 from '../../../images/accessories/accessorie1.svg';
import accessorie2 from '../../../images/accessories/accessorie2.svg';
import accessorie3 from '../../../images/accessories/accessorie3.svg';
import accessorie4 from '../../../images/accessories/accessorie4.svg';
import beard1 from '../../../images/accessories/beard1.svg';
import beard2 from '../../../images/accessories/beard2.svg';
import beard3 from '../../../images/accessories/beard3.svg';

const RightElementAccessories = () => {
    return (
        <div className="right_element element-accessories">
            <img className="right_image" id="element_19" src={accessorie1} alt="accessorie1"></img>
            <img className="right_image" id="element_20" src={accessorie2} alt="accessorie2"></img>
            <img className="right_image" id="element_21" src={accessorie3} alt="accessorie3"></img>
            <img className="right_image" id="element_22" src={accessorie4} alt="accessorie4"></img>
            <img className="right_image" id="element_23" src={beard1} alt="beard1"></img>
            <img className="right_image" id="element_24" src={beard2} alt="beard2"></img>
            <img className="right_image" id="element_25" src={beard3} alt="beard3"></img>
        </div>
    )
}

export default RightElementAccessories