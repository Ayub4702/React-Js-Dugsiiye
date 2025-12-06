function Greeting (Props){

 const User = Props.UserAge >= 18 ?  "adult" : "you're not adult"
 const Letters = Props.UserName.length >= 6 ?  "normal" : "bold"
 return (
  <div>
  <p>UserName: {Props.UserName} ({Letters})</p>
  <p>Age:{Props.UserAge} ({User})</p>
  </div>
 )
}

export default Greeting; 