import React from 'react';
import styled from 'styled-components';

const StoryThumb = (props) => (
    <div>
        <div key={props.story.id} className={props.className}>
            <img src={props.story.image} alt="story_thumb" /> 
        </div>
    </div>
);

export default styled(StoryThumb)`
    margin: 10px 10px 10px 10px;
    color: white;
`;
