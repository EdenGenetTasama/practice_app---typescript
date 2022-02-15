import { useState } from "react";

const Lotto = () => {
  const [playerName, setPlayerName] = useState({playerName: ""});
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);


    const constOnClickEvent = () => {
  const AllNumSelected: number[] = [];
  AllNumSelected.push(num1, num2, num3, num4 ,num5 );
  const randomNumbers:number[] = [Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)];
    console.log(AllNumSelected);
    console.log(randomNumbers);
    for(let i=0; i<AllNumSelected.length; i++){
      for(let j=0 ; j<randomNumbers.length; j++){
        if(AllNumSelected[i] ==randomNumbers[j] ){
          alert("Win number"+AllNumSelected[i])
        }
      }
    }
  };
const Update=(event:any)=>{
  setPlayerName(event.target.value)
}
  const GetInfoFromInput = (event: any) => {
    switch (event.target.name) {
      case "num1":
        if (event.target.value > 100 || event.target.value < 0) {
          alert("number is over 100 or less then 0");
          break;
        }
        setNum1(event.target.value);
        break;
      case "num2":
        if (event.target.value > 100 || event.target.value < 0) {
          alert("number is over 100 or less then 0");
          break;
        }
        setNum2(event.target.value);

        break;
      case "num3":
        if (event.target.value > 100 || event.target.value < 0) {
          alert("number is over 100 or less then 0");
          break;
        }
        setNum3(event.target.value);
        break;
      case "num4":
        if (event.target.value > 100 || event.target.value < 0) {
          alert("number is over 100 or less then 0");
          break;
        }
        setNum4(event.target.value);
        break;
      case "num5":
        if (event.target.value > 100 || event.target.value < 0) {
          alert("number is over 100 or less then 0");
          break;
        }
        setNum5(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input type="text" placeholder="PlayerName" onChange={Update}/>
      <input
        type="number"
        placeholder="num 1"
        min="0"
        max="100"
        name="num1"
        onChange={GetInfoFromInput}
      />
      <input
        type="number"
        placeholder="num 2"
        min="0"
        max="100"
        name="num2"
        onChange={GetInfoFromInput}
      />
      <input
        type="number"
        placeholder="num 3"
        min="0"
        max="100"
        name="num3"
        onChange={GetInfoFromInput}
      />
      <input
        type="number"
        placeholder="num 4"
        min="0"
        max="100"
        name="num4"
        onChange={GetInfoFromInput}
      />
      <input
        type="number"
        placeholder="num 5"
        min="0"
        max="100"
        name="num5"
        onChange={GetInfoFromInput}
      />
      <button type="button" onClick={() => constOnClickEvent()}>
        Lotto
      </button>
    </div>
  );
};

export default Lotto;
