import * as React from "react"
import CourseTable from "../Components/CourseTable"
import { CourseService } from "../Service/CourseService"

export default class AllCourses extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        CourseService.getAllCourses().then(response => {
            //successfull callback
            this.setState({
                courses: response.data
            })
        }).catch(error => {
            //failed callback
            console.log(error);
        });
    }

    enrollCourses(courseName) {
        CourseService.enrollCourse(courseName).then(response => {
            alert(`${courseName} enrolled`);
        }).catch(error => {
            alert(`${courseName} enroll failed ${error}!`);
        })
    }

    render() {
        return(
            <div>
                <CourseTable courses = {this.state.courses}
                buttonLabel = {"Enroll"}
                buttonColor ={"success"}
                handleButtonClick = {this.enrollCourses}/>
            </div>
        )
    }
}