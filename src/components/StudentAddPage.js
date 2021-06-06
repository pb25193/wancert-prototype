import React from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { startAddStudent } from '../actions/students';
import { downloadJsonWithFilename } from '../util/ftp';



export class StudentAddPage extends React.Component {

    onAddStudentClick = (student)=>{
        this.props.startAddStudent(student);
        this.props.history.push('/');
    };

    onDownloadAllStudentsClick = () => {
        const obj = this.props.students;
        const filename = "students_size_" + obj.length + ".json";
        downloadJsonWithFilename(obj, filename);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Fill in the details of your student:</h1>
                    </div>
                </div>
                <div className="content-container">
                    <StudentForm 
                        onAddStudentClick={this.onAddStudentClick} 
                        onDownloadAllStudentsClick={this.onDownloadAllStudentsClick} 
                    />
                    <button
                        className="button"
                        onClick={this.onDownloadAllStudentsClick}
                    >
                        Download All Students Backup
                    </button>
                    <div>
                        <button
                            className="button"
                            onClick={this.onDownloadAllStudentsClick}
                        >
                            Recover Students from Backup File
                        </button>
                        <input
                            className="file-upload"
                            type="file"
                        />
                    </div>
                    <button
                        className="button"
                    >
                        Submit all students to blockchain
                    </button>
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => ({
    startAddStudent: (student) => dispatch(startAddStudent(student))
});

const mapStateToProps = (state) => ({
    students: state.students
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentAddPage);