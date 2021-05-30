const studentsReducerDefaultState = []

const studentsReducer = (state = studentsReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_STUDENT':
            return [...state, action.student];
        case 'REMOVE_STUDENT':
            return state.filter((student) => student.id !== action.id );
        case 'EDIT_STUDENT':
            return state.map((student) => student.id === action.id ? {...student, ...action.updates} : student );
        case 'SET_STUDENTS':
            return action.students;
        default:
            return state;
    }
};

export default studentsReducer;