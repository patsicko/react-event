import React,{useState} from 'react';


const Conditional = () => {
const[tags,setTags]=useState([
// "tag1","tag2","tag3" 
])
const[count,setCount]=useState(0)

// const renderTags=()=>{
//   return  <ul>{tags.map(tag=><li key={tag}>{tag}</li>)}</ul>}
   
    


// const noTag=()=>{
//      return <p>There is no tag</p>
// }
const handleIncrement=(product)=>{
    console.log({product:count})
    setCount(count+1)
}


  return (<div>

    <button onClick={()=>handleIncrement()}> Increment</button>

    <div> {tags[0] ?? <p>please create a tag list</p>}  {count}   { tags.length==0 ?  <p>There is no tag</p>:<ul>{tags.map(tag=><li key={tag}>{tag}</li>)}</ul>}   </div>
    </div> )
}

export default Conditional