import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';

const Products = () => {

    const[products,setProducts]=useState([])
const fetchProducts=async()=>{

const data=await (await fetch("https://fakestoreapi.com/products")).json();
setProducts(data);
console.log(data)

}
useEffect(()=>{
  fetchProducts()
},[])

const handleDelete=(item)=>{
console.log(item);

const update=products.filter(product=>product.id!=item.id);
setProducts(update)
}

  return (

    <div>
      <h1>Products</h1>
     
     <Table>
      <thead>
        
        <tr>
          <th>Category</th>
          <th>Description</th>
          <th>Id</th>
          <th>Image</th>
          <th>price</th>
          <th >Delete</th>
        </tr>
      </thead>
      <tbody>

      {products.map(item=>(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td><img src={item.image} height="120" width="120"/></td>
          <td>{item.category}</td>
          <td>{item.description}</td> 
          <td>{item.price}</td>
         <button className='btn btn-danger bg-danger btn-sm' onClick={()=>handleDelete(item)}>Delete</button>
        </tr>

      ))}
        
      </tbody>
     </Table>

    </div>
  )
}

export default Products