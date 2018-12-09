import { types } from 'mobx-state-tree';
import { CourseStore } from './CourseStore';
/**
 * RootStoreModel
 */

const RootStore = types.model('RootStore').props({
    courseStore: types.optional(CourseStore, {}),
    // storyListStore: types.optional(StoryListStore, {}),
    // editionStore: types.optional(EditionStore, {}),
    // userStore: types.optional(UserStore, {})
});

export default RootStore;
