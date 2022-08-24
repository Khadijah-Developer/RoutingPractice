import React from 'react'
import { useParams } from 'react-router-dom';

const Word = (props) => {
    const params = useParams()
    console.log(params)

    return (
        <div className="container m-5 p-5 text-center"
            style={{
                color: params.textColor || 'blue',
                backgroundColor: params.backgroundColor || 'red',
            }}
        >   
            <h1>The word is {params.word}</h1>

            {/* other solutions */}
         {/* <div style={{ backgroundColor: params.backgroundColor }}>
                <h1 style={{color: params.textColor}}> The word is  {params.word}</h1>
                
            </div> */}
        </div>
    )
}

export default Word;
