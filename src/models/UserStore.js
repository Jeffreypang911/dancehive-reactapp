import { types } from 'mobx-state-tree';

export const User = types 
    .model({
        id: types.identifier,
        name: types.string
    })

export const UserStore = types
    .model({
        users: types.optional(types.array(User), [])
    })
    .actions(self => ({
        // saveUsers() {
        //     // grab data from loaded stories            
        //     const items = getRoot(self).storyListStore.items;
        //     let mappedUsers = items.map((item) => {
        //         // console.log(getSnapshsot(item));
        //         let user = {};
        //         user.id = item.creatorId ;
        //         user.name = item.projectLead;
        //         return user;                
        //     });
            
        //     let flags = [];
        //     let uniqueUsers = mappedUsers.filter((user) => {
        //         if (flags[user.id]) {
        //             return false;
        //         }
        //         flags[user.id] = true;
        //         return true;
        //     });
    
        //     self.users = [];
        //     self.users.push(...uniqueUsers);
        // },
        addUser(id, name) {
            const exists = self.users.filter(user => user.id === id );
            if (exists.length < 1) {
                self.users.push({
                    id,
                    name                    
                })
            }      
        }
    }))
