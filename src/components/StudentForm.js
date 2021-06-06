import React from 'react';
import { SingleDatePicker } from 'react-dates';

class StudentForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rollNumber: props.student ? props.student.rollNumber : '',
            college: props.student ? props.student.college : '',
            name: props.student ? props.student.name : '',
            department: props.student ? props.student.department : '',
            minor: props.student ? props.student.minor : '',
            gpa: props.student ? props.student.gpa.toString() : '',
            batch: props.student ? props.student.batch.toString() : '',
            error: "",
            clickedButton: ""
            
        };
    }

    onRollNumberChange = (e) => {
        const rollNumber = e.target.value;
        this.setState(()=>({ rollNumber }));
    };

    onDepartmentChange = (e) => {
        const department = e.target.value;
        this.setState(()=>({ department }));
    };

    onMinorChange = (e) => {
        const minor = e.target.value;
        this.setState(()=>({ minor }));
    };

    onCollegeChange = (e) => {
        const college = e.target.value;
        this.setState(()=>({ college }));
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(()=>({ name }));
    };

    onGpaChange = (e) => {
        const gpa = e.target.value;
        if(!gpa || gpa.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(()=>({ gpa }));
    };

    onBatchChange = (e) => {
        const batch = e.target.value;
        if(!batch || batch.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(()=>({ batch }));
    };

    onSubmit = (e) => {
        switch(this.state.clickedButton) {
            case "download-all-students":
                this.onDownloadAllStudentsClick(e);
                break;
            case "add-student":
                this.onAddStudentClick(e);
                break;
            default:
                console.log("AddStudentForm button state is invalid, this shouldnt have ever happened.");
        }
    };

    onDownloadAllStudentsClick = (e) => {
        e.preventDefault();
        this.props.onDownloadAllStudentsClick();
    };

    onAddStudentClick = (e) => {
        e.preventDefault();
        if(false){
            this.setState(()=>({error: "Please provide description and amount"}));
        } else {
            this.setState(()=>({error: ""}));
            this.props.onAddStudentClick({
                name: this.state.name,
                rollNumber: this.state.rollNumber,
                college: this.state.college,
                batch: this.state.batch,
                department: this.state.department,
                gpa: parseFloat(this.state.gpa, 10),
                minor: this.state.minor,
            })
        }

    };

    render(){
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Name"
                    value={this.state.name}
                    autoFocus
                    onChange={this.onNameChange}
                />
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Roll Number"
                    value={this.state.rollNumber}
                    autoFocus
                    onChange={this.onRollNumberChange}
                />
                <input 
                    type="text"
                    className="text-input"
                    placeholder="College"
                    value={this.state.college}
                    autoFocus
                    onChange={this.onCollegeChange}
                />
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Batch"
                    value={this.state.batch}
                    onChange={this.onBatchChange}
                />
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Department"
                    value={this.state.department}
                    autoFocus
                    onChange={this.onDepartmentChange}
                />
                <input 
                    type="text"
                    className="text-input"
                    placeholder="GPA"
                    value={this.state.gpa}
                    onChange={this.onGpaChange}
                />
                <input 
                    type="text"
                    className="text-input"
                    placeholder="Minor"
                    value={this.state.minor}
                    autoFocus
                    onChange={this.onMinorChange}
                />
                <div>
                <button 
                    className="button"
                    onClick={() => (this.state.clickedButton = "add-student")}
                    type="submit"
                >
                    Add Student
                </button>
                {/*
                <button 
                    className="button"
                    onClick={() => (this.state.clickedButton = "download-all-students")}
                    type="submit"
                >
                    Download JSON
                </button>
                */}
                </div>
            </form>
        );
    }
};



export default StudentForm;