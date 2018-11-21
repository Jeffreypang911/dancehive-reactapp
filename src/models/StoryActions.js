import { getRoot, flow, types } from 'mobx-state-tree';
import axios from 'axios';

export function createStoryActions() {
    return types.model({        
        isStoriesLoaded: types.optional(types.boolean, false)
    })
        .actions(self => ({
            loadStories: flow(function*(editionName = null) {       
                self.isStoriesLoaded = false;                
                const storylist = yield axios.get(`http://telus2014-dev.localdev.dimerocker.com/api/grid-data/portal-community-videos`);
                // get root store in here 
                const root = getRoot(self);

                // const mappedStories = filteredStories.map((
                storylist.data.results.forEach((
                    {title, image_url, id, video_link, cycle_name, project_lead, creator_id}) => {                    
                    // add/update user
                    root.userStore.addUser(creator_id, project_lead);
                    // add/update story
                    self.addStory(title, image_url, id, video_link, cycle_name, project_lead, creator_id, creator_id);
                });
                self.isStoriesLoaded = true;
                console.log('users length: ', root.userStore.users.length)
            }), addStory(title, image, id, videoLink, cycleName, projectLead, creatorId, user) { 
                    // check if story exists                    
                    const storyExists = self.items.filter(item => item.id === id);
                    // map story
                    let storyMap = { title, image, id, videoLink, cycleName, projectLead, creatorId, user };
                    // if story exists, then update
                    if (storyExists.length > 0) {
                        self.items[id] = storyMap;
                    } else {
                    // else add
                        self.items.push(storyMap);
                    }                    
            },
            afterCreate() {
                self.loadStories();
                console.log("Loading items");
            }         
        }))
        .views(self => ({           
            filterByEditionName(editionName = null) {
                let filteredStories = [];

                if (editionName != null) {          
                    filteredStories = self.items.filter((story) => {
                        return story.cycleName.trim() === editionName.trim(); });
                } else {
                    filteredStories = self.items;
                }
                console.log('filteredStories length: ', filteredStories.length);
                console.log('total stories length: ', self.items.length);
                return filteredStories;
            }
            // then call this in the componentDidMount section of the 
        }));
}
