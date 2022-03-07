export default function Button(){

  const handleClick = () => {
    console.log("clicked too")
  }

  return(
    <div>
      <button onClick={() => console.log("clicked")}>Click me</button>
      <button onClick={handleClick}>Then Click Me</button>
    </div>
  )
}