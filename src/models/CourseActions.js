import { flow, types } from 'mobx-state-tree';
import db from '../firebase/firebase';

export function createCourseActions() {
    return types.model({        
        isCoursesLoaded: types.optional(types.boolean, false)
    })
        .actions(self => ({
            loadCourses: flow(function*() {       
                self.isCoursesLoaded = false;
                let courses = [];                
                //1. Get course from firebase                
                let courseData = yield db.collection("series").get()
                courseData.forEach(function(doc) {
                    // console.log(doc.id, " => ", doc.data());

                    const dataWithId = {
                        id: doc.id,
                        title: doc.data().title,
                        instructor: doc.data().instructor,
                        imageUrl: doc.data().imageUrl,
                        description: doc.data().description,
                        order: doc.data().order,
                        tag: doc.data().tag,
                        videoCount: doc.data().videoCount
                    }
                    courses.push(dataWithId);
                });

                //2. Populate the data into the store
                courses.forEach((
                    {id, title, instructor, imageUrl, description, order, tag, videoCount}) => {
                    self.addCourse(id, title, instructor, imageUrl, description, order, tag, videoCount);
                });

                self.isCoursesLoaded = true;
            }), addCourse(id, title, instructor, imageUrl, description, order, tag, videoCount) {
                // a. check if course exists
                const courseExists = self.courses.filter(item => item.id === id);

                // b. map it
                let course = {id, title, instructor, imageUrl, description, order, tag, videoCount};
                // if exists, then update
                if (courseExists.length > 0) {
                    self.courses[id] = course;
                } else { 
                // else add
                    self.courses.push(course);
                };
            },
            afterCreate() {
                self.loadCourses();
                console.log("Loading courses");
            }         
    }));
}
