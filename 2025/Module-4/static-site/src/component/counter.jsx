import { useState, useEffect } from 'react';



export default function Counter() {

    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem("count");
        return storedCount !== null ? parseInt(storedCount, 10) : 0
    });

    useEffect(() => {
        console.log("Count", count);
    }, [count])

    const incrementCount = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        localStorage.setItem("count", count)
    }, [count])

    return (
        <div>
            {count}
            <button onClick={incrementCount}>Add 1</button>
        </div>
    )
}