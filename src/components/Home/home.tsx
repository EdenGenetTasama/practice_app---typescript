const Home = () => {
  let ageUser: number = 25;
  let firstName: string = "Eden Genet";
  let isArrived: boolean = true;
  let arrayOfGrades: number[] = [1, 2, 3, 4, 5, 6];

  const GetArray = (): void => {
    arrayOfGrades.map((item) => {
      console.log(item);
    });
  };

  const PopAlert = (): void => {
    alert("Welcome");
  };

  const GetInfo = (
    age: number,
    fName: string,
    isArrived: boolean,
    arrayOfGrades: number[]
  ) => {
    alert(`${age} , ${fName} , ${isArrived}`);
    arrayOfGrades.map((item) => {
      alert(item);
    });
  };

  const IsNameLongThe4Char = (getName: string): boolean => {
    if (getName.length >= 4) {
      alert("Name IS over 4 letters");
      return true;
    } else {
      alert("Name IS'NT over 4 letters");
      return false;
    }
  };

  const isAgeOver15 = (name: string, age: number): string => {
    if (age > 4) {
      return name;
    } else {
      return "wrong Class";
    }
  };

  const AllParametersTogether = (
    fName: string,
    lName: string,
    age: number = 0
  ): string => {
    console.log(`${fName} ,${lName} , ${age} `);
    return `${fName} ,${lName} , ${age} `;
  };

  const NamesOfStudentsPerTeacher = (
    teactheName?: string,
    ...restOfStudents: string[]
  ) => {
    restOfStudents.map((item) => {
      console.log(item);
    });
  };

  const GetPrintingToLogInfo = (
    fName: string,
    lName?: string,
    grade: number = 60,
    ...restArray: string[]
  ): void => {
    if (lName != undefined) {
      console.log(`${fName} ,${lName} , ${grade} `);
      restArray.map((item) => {
        console.log(item);
      });
    }
  };

  const ReturnTheBiggerNumber = (arrayOfNumbers: number[]): void => {
    let maxNumber: number = 0;
    arrayOfNumbers.map((item) => {
      if (item > maxNumber) {
        maxNumber = item;
      }
    });
    console.log(maxNumber);
  };

  // const GetLowerNumAndName=(getName:string[] , getNumber:number[]):void=>{
  //   let lowerName:string= getName[0];
  //   let lowerNumber:number=getNumber[0];
  //   getName.map((item)=>{
  //     if(item.length<lowerName.length ){
  //       lowerName=getName;
  //     }
  //   })

  // }
  // console.log(lowerName,lowerNumber);

  const IfNameTwoTime = (arrayOfNames: string[], oneName: string): void => {
    arrayOfNames.map((name) => {
      if (name == oneName) {
        console.log(arrayOfNames.indexOf(name));
        for (let i = arrayOfNames.indexOf(name); i < arrayOfNames.length; i++) {
          if (name == oneName) {
            console.log(arrayOfNames.indexOf(name));
          }
        }
      }
    });
  };

  return (
    <div>
      <h5>{firstName}</h5>
      <p>{ageUser}</p>
      <button type="button" onClick={() => GetArray()}>
        Click to log
      </button>
      <button type="button" onClick={PopAlert}>
        Pop Alert
      </button>
      <button
        type="button"
        onClick={() => GetInfo(ageUser, firstName, isArrived, arrayOfGrades)}
      >
        alert
      </button>
      <button type="button" onClick={() => IsNameLongThe4Char("Dan")}>
        If Name longer the 4
      </button>
      <button
        type="button"
        onClick={() => AllParametersTogether("Eden Genet", "Tasama")}
      >
        All info
      </button>
      <button
        type="button"
        onClick={() =>
          NamesOfStudentsPerTeacher(
            undefined,
            "Eden",
            "Daniel",
            "Oshra",
            "Almaz",
            "Selam"
          )
        }
      >
        Print to log
      </button>
      <button
        type="button"
        onClick={() =>
          NamesOfStudentsPerTeacher(
            undefined,
            "Eden",
            "Daniel",
            "Oshra",
            "Almaz",
            "Selam"
          )
        }
      >
        Print to log
      </button>
      <button
        type="button"
        onClick={() =>
          GetPrintingToLogInfo("Eden", "Tasama", 90, "Oshra", "Almaz", "Selam")
        }
      >
        Print to log2
      </button>
      <button
        type="button"
        onClick={() => ReturnTheBiggerNumber([50, 2, 96, 52, 100, 5, 23])}
      >
        Get max num
      </button>
      <button
        type="button"
        onClick={() => IfNameTwoTime(["Eden", "Daniel", "Avi", "Eden"], "Eden")}
      >
        Get name
      </button>
    </div>
  );
};

export default Home;
