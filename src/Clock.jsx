import { useState} from 'react';
import Counting from "./Counting";


function Clock() {
    const [clocks , setClocks]  = useState(["A","B","C"]);

    function handleChange () {
        setClocks(['D', ...clocks]);
    }

    return (
        <>
        <button onClick={handleChange}></button>
        <div>
            {clocks.map(clock => <Counting key={clock} name={clock}></Counting> )}
        </div>
        </>
    )
}

export default Clock;