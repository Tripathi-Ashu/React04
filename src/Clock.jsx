import { useState} from 'react';
import Counting from "./Counting";


function Clock() {
    const [clocks , setClocks]  = useState(["A","B","C"]);

    function handleChange () {
        setClocks(['D','A','B','C']);
    }

    return (
        <>
        <button onClick={handleChange}></button>
        <div>
            clocks.map(clock => )
        </div>
        </>
    )
}