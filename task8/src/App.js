import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

function App() {
	const [number, setNumber] = useState(0);
	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		let autoDec = null
		if(!number){
			setDisabled(false)
		}
		if(setDisabled){
		autoDec = setInterval(()=>{
			if(number && number< 1000){
				setNumber(number-1)
			}
		},1000)
	  }
	  return ()=> clearInterval(autoDec)
	},  [number])

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
				<button disabled={disabled} onClick={() => changeNumber('increase')}>Increase</button>
				<button disabled={disabled} onClick={() => changeNumber('decrease')}>Decrease</button>
				<button disabled={disabled} onClick={() => changeNumber('reset')}>Reset</button>
				<input type='number' value={number}
					onChange={e=> {
					setNumber(+e.target.value > 1000 ? number : e.target.value)
					setDisabled(true)
					}} placeholder='введите число'/>
			</div>
		</div>
	);
}

export default App;