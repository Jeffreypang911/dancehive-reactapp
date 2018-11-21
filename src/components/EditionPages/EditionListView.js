import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import StoryList from '../StoryList';

class EditionListView extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.match.params.slug}</h1>
                <StoryList slug={this.props.match.params.slug}/>
            </div>
        )

    }
}
export default inject('storyListStore')(observer(EditionListView));