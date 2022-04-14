import React from "react"
import {CourseService} from "../Service/CourseService";
import CourseTable from "../Components/CourseTable";

export default function EnrolledCourses() {
    const [courses, setCourses] = React.useState([]);
    React.useEffect(getEnrolledCourses,[]);

    function getEnrolledCourses(){
        CourseService.getStudentCourses().then(response => {
            setCourses(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function dropCourse(courseName) {
        CourseService.dropCourse(courseName).then(response => {
            alert(`${courseName} dropped`);
            getEnrolledCourses();
        }).catch(error => {
            console.error(error);
            alert(`${courseName} failed ${error}!`);
        })
    }

    return (
        <div>
            <CourseTable courses = {courses}
                         buttonLabel = {"Drop"}
                         buttonColor ={"error"}
                         handleButtonClick = {dropCourse}/>
        </div>
    )
}