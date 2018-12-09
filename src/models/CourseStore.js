import { types } from 'mobx-state-tree';
import { createCourseActions } from './CourseActions';

export const Course = types.model({
    id: types.string,
    title: types.string,
    instructor: types.string,
    imageUrl: types.string,
    description: types.string,
    order: types.number,
    tag: types.array(types.string),
    videoCount: types.number
});

export const CourseStore = types.compose(types
    .model({
        courses: types.optional(types.array(Course), [])
    })
    ,createCourseActions()
);
