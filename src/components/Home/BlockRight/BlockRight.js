import React from 'react'
import RightElementShape from './RightElementShape'
import RightElementFace from './RightElementFace'
import RightElementHair from './RightElementHair'
import RightElementAccessories from './RightElementAccessories'

const BlockRight = () => {
    return (
        <div className="mood_block-right">
            <div className="right_elements">
                <RightElementShape />
                <RightElementFace />
                <RightElementHair />
                <RightElementAccessories />
            </div>
        </div>
    )
}

export default BlockRight