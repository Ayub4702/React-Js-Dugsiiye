const Status = ({name ,  online})=>{

 const avilibale = online ? "online" : "ofline";

return (
 <div>
        <p> {name} : {avilibale}</p>
        {/* <p> {online} {avilibale}</p> */}
       
 </div>
)

}

export default Status;
