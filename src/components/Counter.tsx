import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCounter] = useState(0);
    
    const increment = () => {
        setCounter(prevState => prevState + 1);
    }

    return ( 
        <div className={classes.btn}>
            <h2>{count}</h2>
            <button style={{ background: 'red'}} onClick={increment}>increment</button>
        </div>
    )
}