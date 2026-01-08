 
// import ShoppingCart from "./ShoppingCart"
// import UseEffecr from "./UseEffecr"
// import Exercise from "./Exercise"
// import TimerUseEffects from "./TimerUseEffect"
// import PokemanApi from "./PokemanApi"
// import Usercard from "./Usercard"
import UserList from "./UserList"
import LoginForm from "./LoginForm";

function App (){

  const users = [
    {id: 1, name: "Ayuub", email: "nadaara5538@5a5.com"},
    {id: 12, name: "yuusuf", email: "yuusufra58@5a5.com"}
  ]
return (
  <>
  
  {/* <ShoppingCart/>
  <UseEffecr/>
  <Exercise/>
  <TimerUseEffects/>
  <PokemanApi/>
  // <Usercard/> */}
  <UserList users={users}/>  
  <LoginForm/>

  </>
)

}

export default App; 

