import data from "../data/characters"

export default function MyMap(){

  //TO DO: Display a list of characters on the Homepage
  //Steps
  //1. Import this component in App.js
  //2. Import the characters file
  //3. Console.log characters data
  //4. Map over characters and return 
  
  console.log("data", data)

  return(
    <div>
      <h3>Characters List</h3>
      {data.map((char, index) => {
        return (
          <div key={char.id}>
            <h2>{char.name}</h2>
            <img src={char.imgUrl}/>
          </div>
        )
      })}
    </div>
  )
}