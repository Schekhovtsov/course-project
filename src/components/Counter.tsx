import { useState } from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="app">
            <h1 className={styles.text}>{counter}</h1>
            <button
                onClick={() => {
                    setCounter((prev) => prev + 1);
                }}
            >
                +1
            </button>
        </div>
    );
};
