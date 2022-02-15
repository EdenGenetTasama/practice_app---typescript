import { useReducer } from "react";
import studentAction from "../../Actions/students-action";
import StudentReducer from "../../Reducers/student-reducer";

const Students = () => {
  const [student, studentDispatch] = useReducer(StudentReducer, []);

  const onClickToButton = () => {
    studentDispatch(studentAction("anyPayload"));
  };

  return (
    <div>
      {/* {student} */}
      <button type="button" onClick={onClickToButton}>
        Click to dispatch
      </button>
      {student.map((item: any) => {
        return <p>{item.fName} , {item.lName}, {item.age}</p>
      })}
      
    </div>
  );
};

export default Students;
