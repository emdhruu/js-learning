//de-structuring in objects
const course = {
    coursename : "javascript, reactjs",
    courseplatform : "online",
};
// console.log(course.coursename);
const {coursename } = course;
console.log(coursename);