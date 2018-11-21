import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import StoryThumb from './StoryThumb';
import Slider from 'react-styled-carousel'; 
// import { onSnapshot } from 'mobx-state-tree';
import { Link } from 'react-router-dom';

class StoryList extends Component {    
    render() {
        const responsive = [
            { breakPoint: 1280, cardsToShow: 6 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
            { breakPoint: 760, cardsToShow: 4 },
            { breakPoint: 400, cardsToShow: 2}
          ];
          
        const storyListStore = this.props.storyListStore;
        console.log('isStoriesLoaded', this.props.storyListStore.isStoriesLoaded);
        if (this.props.storyListStore.isStoriesLoaded) {
            return (
                <Slider showDots={false} autoSlide={null} responsive={responsive} className={this.props.className}>
                    {storyListStore.items.length > 0 && this.props.storyListStore.filterByEditionName(this.props.slug).map((story) => (
                        <div key={story.id}>
                            <Link to={{ pathname: `/story/${story.id}`, state: { story }}}>
                                <StoryThumb story={story} />
                            </Link>
                        </div>
                    ))}
                </Slider>
            )
        } else {
            return null;
        }
    }
}
export default inject('storyListStore')(observer(StoryList));
