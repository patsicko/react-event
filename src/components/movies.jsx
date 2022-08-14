import React, { Component } from 'react';
import styles from "./movies.module.css";
import { getMovies } from '../fakeMovies';


class Movies extends Component{
    state={
      movies:getMovies()
    }


handleDelete=(movie)=>{
    // console.log(movie)
     const movy=this.state.movies.filter(item=>item._id !==movie._id);
     this.setState({movies:movy})
          
}


    render(){
        // console.log(this.handleDelete);
        return(

        <>
     {/* {console.log(this.state.movies)} */}

   


<table  className="table">
        <thead>
            <tr>
           <th>Title</th>
           <th>Genre</th>
           <th>Stock</th>
           <th>Rate</th>
           <th></th>
            </tr>
        </thead>
      <tbody>
      {this.state.movies.map(movie=>(
      <tr key={movie._id}>
     
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
         <td><button onClick={()=>this.handleDelete(movie)} className='btn btn-danger btn-sm'>Delete</button></td>
       
      </tr>
      ))}
      </tbody>
     </table>

        </>

        );
    }
}

export default Movies;



