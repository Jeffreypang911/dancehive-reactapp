import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Dashboard extends Component {
    render() {
        const courses = this.props.courseStore.courses;
        if (this.props.courseStore.isCoursesLoaded) {
            return (
                <div id="videoDiv">
                    <div id="videoBlock">
                        <video loop autoPlay muted playsInline id="video">
                            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        {courses.length > 0 && courses.map((course) => (
                            <div key={course.id} style={{padding: "15px"}}>
                                <h1>{course.title}</h1>
                                <h2>{course.instructor}</h2>
                                <p>{course.description}</p>
                                <img src={course.imageUrl} width="300px" height="300px" alt="course poster"/>
                            </div>
                        ))}
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
export default inject('courseStore')(observer(Dashboard));