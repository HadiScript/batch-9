import { useEffect, useState } from 'react'

const Comp3 = () => {

  const [count, setCount] = useState(0)

  // Request -> to fetch some data (1mb)


  useEffect(
    () => {
      console.log("am enter ")
    },
    []
  )


  return (
    <div>
      <h1>Comp3 - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
    </div>
  )
}

export default Comp3