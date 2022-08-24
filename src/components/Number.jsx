import * as React from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {
     const { id } = useParams();
    return isNaN(id) ? (
        <div className="container m-5 p-5 border btn btn-outline-light">
            <h1 className='text-center text-success m-5 '>The word is {id}</h1>
        </div>
    ) : (
             <div className="container m-5 p-5 border btn btn-outline-light">
                <h1 className='text-center text-warning m-5'>The number is {id}</h1>
                </div>
    )
} 
 export default Number;

// const Number = (props) => {
//     const params = useParams();

//     return ( 
//         <div className="container">
//                {params.id}
//         </div>
//      );
// }
 
// export default Number;

