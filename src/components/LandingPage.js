import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import StoryList from './StoryList';

class LandingPage extends Component {    
    render() {
        return (
            <div id="videoDiv">
                <div id="videoBlock">
                    <video autoPlay loop muted playsInline id="video">
                        <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4"/>
                    </video>    
                </div>    
                {/* <StoryList /> */}
                <p>I wonder where this goes</p>
            </div>
            )
    };
}
export default inject("storyListStore")(observer(LandingPage));