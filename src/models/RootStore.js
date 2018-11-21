import { types } from 'mobx-state-tree';
import { StoryListStore } from './StoryListStore';
import { EditionStore } from './EditionStore';
import { UserStore } from './UserStore';
/**
 * RootStoreModel
 */

const RootStore = types.model('RootStore').props({
    storyListStore: types.optional(StoryListStore, {}),
    editionStore: types.optional(EditionStore, {}),
    userStore: types.optional(UserStore, {})
});

export default RootStore;
