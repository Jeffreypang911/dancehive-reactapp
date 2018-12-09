import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class LandingPage extends Component {
    render() {
        const courses = this.props.courseStore.courses;
        if (this.props.courseStore.isCoursesLoaded) {
            return (
                <div id="videoDiv">
                    <div id="videoBlock">
                        <video autoPlay loop muted playsInline id="video">
                            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    Loading
                </div>
            )
        }
    };
}
export default inject('courseStore')(observer(LandingPage));