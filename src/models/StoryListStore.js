import { types } from 'mobx-state-tree';
import { createStoryActions } from './StoryActions';
import { User } from "./UserStore";

export const StoryListItem = types.model({
    title: types.string,
    image: types.string,
    videoLink: types.string,
    id: types.string,
    cycleName: types.string,
    projectLead: types.string,
    creatorId: types.string,
    user: types.maybe(types.reference(types.late(() => User)))
});

export const StoryListStore = types.compose(types
    .model({
        items: types.optional(types.array(StoryListItem), [])
    })
    ,createStoryActions()
);
