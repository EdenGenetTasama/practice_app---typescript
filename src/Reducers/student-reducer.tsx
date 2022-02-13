import IStudents from "../Models/Students/students";


const studentOne:IStudents[] = [{fName:"Eden" , lName:"Tasama" ,age: 25} ,{fName:"Daniel" , lName:"Tal" , age:26} ]

const StudentReducer = (state:any , action:any):any => {
  switch (action.type) {
    case "Show":
      return studentOne;
    default:
      return state;
  }
};

export default StudentReducer;