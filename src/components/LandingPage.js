import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import StoryList from './StoryList';
import Slide from './Hero/Slide';

class LandingPage extends Component {    
    render() {
        return (
            <div>
                <Slide image="https://www.booooooom.com/wp-content/uploads/2018/09/storyhive-amp.jpg" />
                <StoryList />
            </div>
            )
    };
}
export default inject("storyListStore")(observer(LandingPage));