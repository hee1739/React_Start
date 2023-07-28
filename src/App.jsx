import "./App.css";
import MyHeader from "./MyHeader";
import Myfooter from "./Myfooter";

function App() {
  let name = "반가워";

  const func = () => {
    return "이건 함수 사용하는법 ";
  };

  const num = 5;
  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>
          하이 리액트 {name} {func()} {1 + 8}
        </h2>
        <b id="boldText">React.js</b>
      </header>
      <div>
        {num}은 {num % 2 === 0 ? "짝수" : "홀수"}이며, 왼쪽 코드를 조건부
        렌더링이라 합니다{" "}
      </div>
      <Myfooter />
    </div>
  );
}

export default App; //함수를 내보내는거임 컴포넌트명 아님
