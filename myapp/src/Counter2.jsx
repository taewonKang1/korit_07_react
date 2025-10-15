import { useEffect, useState } from 'react'

function Counter2() {
  // 초기값이 0인 상태를 선언.
  const [ count, setCount ] = useState(0);

  useEffect(() => {console.log('Hello ! Changed the state, count !')}, []);
  
  return (
    <>
      <p>Counter2 : {count}</p>
      <button onClick={() => setCount(preCount => preCount + 1)}> 증가 </button>
    </>
  );
}
export default Counter2