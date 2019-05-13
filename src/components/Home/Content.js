import React from 'react'
import BlockLeft from './BlockLeft/BlockLeft'
import BlockRight from './BlockRight/BlockRight'
import ButtonDownload from './ButtonDownload'

const Content = () => {
    return (
        <div className="mood_content">
            <BlockLeft />
            <BlockRight /> 
            <ButtonDownload />
        </div>
    )
}

export default Content