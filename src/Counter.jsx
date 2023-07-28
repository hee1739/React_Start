import React, { useState } from "react"; //useState를 사용할때는 반드시 임포트 해줘야함
import OddeEven from "./OddEven";

//const Counter = (props)
const Counter = ({ initialValue }) => {
  //비구조화 할당으로 받기

  //const [count, setCount] = useState(props.initialValue); //props든 prop이든 명령어는 내 마음대로
  const [count, setCount] = useState(initialValue); //비구조화 할당으로 받기
  //const [num, setNum] = useState( );
  //num이 상태를 가진 변수가 되고 setNum이 상태를 업데이트 하는 함수가 된다,
  //그리고 useState는 함수이므로 사용할 때는 ()를 붙여 함수를 실행한다.

  // react는 언제 화면을 리랜더링 하는거, 랜더링 함수
  // 가상돔
  // 리엑트의 상태, 상태로 선언했을 떄와 일반 변수로 선언했을 때

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <br />
      <br />
      표기 된 수는 : <OddeEven count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0, //실수로 initialValue를 전달 못 시켰을걸 대비해서 기본값 설정
};

export default Counter;
