
const addStudent = ( student ) => ({
    type: "ADD_STUDENT",
    student
 });

 const startAddStudent = (studentData = {}) => {
    return (dispatch)=>{
        const { rollNumber = '', name = '', department = '', gpa = 0, batch = '', minor = '', college = '' } = studentData;
        const student = { rollNumber, name, department, gpa, batch, minor, college };
        dispatch(addStudent({
            digest: rollNumber,
            publicKey: rollNumber,
            ...student
        }));
   }
 }

 export {startAddStudent};