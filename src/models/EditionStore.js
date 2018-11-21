import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

export const EditionStore = types
    .model({
        cycleNames: types.array(types.string),
        cycleTypes: types.array(types.string),
        cycleTypeNames: types.array(types.string),
        genreNames: types.array(types.string),
        editionTypeNames: types.array(types.string),
        isEditionLoaded: types.optional(types.boolean, false),
        isEditionsLoaded: types.optional(types.boolean, false)
    })
    .actions(self => ({
        loadEditions: flow(function*() {
            const storylist = yield axios.get(`http://telus2014-dev.localdev.dimerocker.com/api/grid-data/portal-community-videos`);            

            const cycleNames = [];
            storylist.data.results.forEach((result) => {
                cycleNames.push(result.cycle_name);
            });

            const cycleTypes = [];
            storylist.data.results.forEach((result) => {
                cycleTypes.push(result.cycle_type);
            });

            const cycleTypeNames = [];
            storylist.data.results.forEach((result) => {
                cycleTypeNames.push(result.cycle_type_name);
            });

            const genreNames = [];
            storylist.data.results.forEach((result) => {
                genreNames.push(result.genre_name);
            });

            self.cycleNames = [...new Set(cycleNames)];
            self.cycleTypes = [...new Set(cycleTypes)];
            self.cycleTypeNames = [...new Set(cycleTypeNames)];
            self.genreNames = [...new Set(genreNames)];

            self.isEditionsLoaded = true;
        }),
        loadEdition: flow(function* (editionType = null) {
            self.editionTypeNames = [];
            self.isEditionLoaded = false;
            const storylist = yield axios.get(`http://telus2014-dev.localdev.dimerocker.com/api/grid-data/portal-community-videos`);            
            const editionTypeNames = [];
            storylist.data.results.filter(result => result.cycle_type === editionType).forEach((result) => {
                editionTypeNames.push(result.cycle_name);
            });            
            self.editionTypeNames = [...new Set(editionTypeNames)];
            self.isEditionLoaded = true;
        })
    }));
    