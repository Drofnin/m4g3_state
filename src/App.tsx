import Card from "./components/card"
   


function App() {
 

  return (
    <div className="App">
    <Card
      image='../public/kaka.jpg' 
      date='31.október 2024'
      name=''Nína
      onClick={()=>console.log ('Cake clicked')}/>

<Card
      image='../public/kaka.jpg' 
      date='4.nóvember 2024'
      name='Sunna'
      onClick={()=>console.log ('Cake clicked')}/>

<Card
      image='../public/kaka.jpg' 
      date='31.september 2024'
      name='Sigga'
      onClick={()=>console.log ('Cake clicked')}/>
    
    </div> 
    )   

  
}



export default App
