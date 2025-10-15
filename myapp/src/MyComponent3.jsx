import { useState } from "react";

function MyComponent3() {
  const [ count, setCount ] = useState(0);
  const [ count2, setCount2 ] = useState(0);

  const increment = () => { // 렌더링이 두번 일어나야 하지만  batching 처리로 한번만 일어남
    setCount(count + 1);
    setCount2(count2 + 1);
  }

  return (
    <>
      <p> 현재 값 : {count} 🌟 {count2} </p>
      <button onClick={increment}> 증가 </button>
    </>
  );
}

export default MyComponent3;