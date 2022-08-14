// import React,{useState} from "react";

// const Form=()=>{

// const[name,setName]=useState("");
// const[email,setEmail]=useState("");
// const[gender,setGender]=useState("");
// const[file,setFile]=useState(""); 
// const[data,setData]=useState({});   
// const showData=()=>{
//     {console.log(`name:${name} \n email: ${email} \n gender:${gender} \n file:${file}` )}
    
// }
// const handleSetData=(e)=>{
// const value=e.target.name;
// console.log(value);


// }

//     return(<>
    
// <form >
    
// <input onChange={handleSetData} type="text" name="name" id="name" placeholder="name"/><br/><br/>
// <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email"  placeholder="email"/><br/><br/>
// <select  onChange={(e)=>setGender(e.target.value)}  name="" id="">
// <option value="">gender</option> 
// <option value="male">male</option>
// <option value="female">female</option>
// </select><br /><br />
// <   input type="file" onChange={(e)=>setFile(e.target.files[0])} />

//  </form> <br />
//  <button className="btn btn-sm bg-success "  onClick={()=>showData()}>submit</button>

//     </>);
// }
// export default Form;



import React,{useState} from "react";

const Form=()=>{

// const[name,setName]=useState("");
// const[email,setEmail]=useState("");
// const[gender,setGender]=useState("");
// const[file,setFile]=useState(""); 



const[data,setData]=useState({});  

const showData=()=>{
  console.log(data);
    
}

const handleSetData=(e)=>{
const name=e.target.name;

const value=e.target.value;
const file=e.target.files;

if(name=="file"){

   

    setData({
        ...data,[name]:file[0]  
      })
        
}


setData({
  ...data,[name]:value  
})


console.log(value);


}

    return(<>
    
<form >
    {/* {JSON.stringify(data)} */}
    
<input onChange={handleSetData} type="text" name="name" id="name" placeholder="name"/><br/><br/>
<input onChange={handleSetData} type="email" name="email" id="email"  placeholder="email"/><br/><br/>
<select  onChange={handleSetData}  name="gender" id="">
<option value="">gender</option> 
<option value="male">male</option>
<option value="female">female</option>
</select><br /><br />
<   input type="file" name="file" onChange={handleSetData} />

 </form> <br />
 <button className="btn btn-sm bg-success "  onClick={()=>showData()}>submit</button>

    </>);
}
export default Form;