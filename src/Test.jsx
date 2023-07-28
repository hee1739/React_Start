import Container from "./Container";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

const counterProps = {
  a: 1,
  b: 2,
  initialValue: 5,
};

export function App1() {
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}
//export default App1;
