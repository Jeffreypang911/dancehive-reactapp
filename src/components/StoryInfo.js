import React from 'react';
import styled from 'styled-components';

const StoryInfo = (props) => (
    <div className={props.className}>
        {props.story.title}
    </div>
);

export default styled(StoryInfo)`
    color: orange;
    font-weight: 500;
`;

