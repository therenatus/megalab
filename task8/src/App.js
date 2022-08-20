import React, { useState } from 'react';
import styles from './index.module.scss';

function App() {
	const [number, setNumber] = useState(0);
	const changeNumber = (action) => {
		switch(action) {
			case 'increase':
				setNumber(number+1)
				break;
			case 'decrease':
				setNumber(number-1)
				break;
			case 'reset':
				setNumber(0)
				break;
		}
	}
	return (
		<div className={styles.main}>
			<div className={styles.number}>{number}</div>
			<div className={styles.buttonGroup}>
				<button onClick={() => changeNumber('increase')}>Increase</button>
				<button onClick={() => changeNumber('decrease')}>Decrease</button>
				<button onClick={() => changeNumber('reset')}>Reset</button>
			</div>
		</div>
	);
}

export default App;