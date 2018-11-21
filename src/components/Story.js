import React from 'react';
import ReactPlayer from 'react-player';
import { observer } from 'mobx-react';

const Story = (props) => {
    console.log(props);
    const story = props.location.state.story;
    return (
    <div>
        <h1>
            {story.title}
        </h1>
        <h2>
            {story.user.name}   
        </h2>
        <ReactPlayer 
            url={`https://www.youtube.com/watch?v=${story.videoLink}`} 
            playing={false} 
            controls={true}
        />
    </div>
    )
}

export default observer(Story);