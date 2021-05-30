import React from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { startAddStudent } from '../actions/students';



export class StudentAddPage extends React.Component {

    onSubmit = (student)=>{
        this.props.startAddStudent(student);
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
                    <StudentForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }

};

const mapDispatchToProps = (dispatch) => ({
    startAddStudent: (student) => dispatch(startAddStudent(student))
});

export default connect(undefined, mapDispatchToProps)(StudentAddPage);