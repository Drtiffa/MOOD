import React from 'react';
import LeftChoiceShape from './LeftChoiceShape'
import LeftChoiceFace from './LeftChoiceFace';
import LeftChoiceHair from './LeftChoiceHair';
import LeftChoiceAccessories from './LeftChoiceAccessories';
var createReactClass = require('create-react-class');

var LeftOptionsNav = createReactClass({
    getDefaultProps() {
        return {
        data: [
            { title: 'Shape', content: <LeftChoiceShape /> },
            { title: 'Face', content: <LeftChoiceFace /> },
            { title: 'Hair', content: <LeftChoiceHair /> },
            { title: 'Accessories', content: <LeftChoiceAccessories /> }
        ]
        }
    },
    
    getInitialState() {
        return {
        current: 0
        }
    },
    
    handleClick(i) {
        this.setState({
            current: i
        });
    },
    
    render() {
        var list = this.props.data.map(function(d, i) {
        return <li className={'left_option' + (i === this.state.current? ' active' : '')} key={'left_option-'+i} onClick={this.handleClick.bind(this, i)}>{d.title}</li>  
        }.bind(this));
        
        return (
        <div>
            <ul className='left_options'>{list}</ul>
            {this.props.data[this.state.current].content}
        </div>
        );
    }
});

export default LeftOptionsNav