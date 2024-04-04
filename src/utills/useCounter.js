import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0);
    const incirment = () => {
        setCount(count + 1)
    }

    const decirment = () => {
        if(count > 0) {
            setCount(count - 1);
            return
        }
    }
    return { incirment, decirment, count }
}
export default useCounter;
