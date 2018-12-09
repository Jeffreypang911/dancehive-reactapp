import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class LandingPage extends Component {    
    render() {
        if (this.props.courseStore.isCoursesLoaded) {
            return (
                <div id="videoDiv">
                    <div id="videoBlock">
                        <video loop muted playsInline id="video">
                            <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4"/>
                        </video>    
                    </div>    
                    <h1>{this.props.courseStore.courses.length}</h1>
                </div>
                )
        } else {
            return (
                <div> 
                    not loaded
                </div>
            )
        }
    };
}
export default inject('courseStore')(observer(LandingPage));