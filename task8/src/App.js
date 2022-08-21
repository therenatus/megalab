import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

function App() {
	const [number, setNumber] = useState(0);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		let autoDec = null
		if(!number){
			setDisabled(false)
		}
		if(setDisabled){
		autoDec = setInterval(()=>{
			if(number && number< 1000){
				setNumber(number-1)
				setDisabled(true)
			}
		},1000)
	  }
	  return ()=> clearInterval(autoDec)
	},  [number])

	const increase = () => {
		setNumber(number+1)
	}
	const decrease = () => {
		setNumber(number-1)
	}
	const reset = () => {
		setNumber(0)
	}
	return (
		<div className={styles.main}>
			<div className={styles.number}>{number}</div>
			<div className={styles.buttonGroup}>
				<button disabled={disabled} onClick={() => increase()}>Increase</button>
				<button disabled={disabled} onClick={() => decrease()}>Decrease</button>
				<button onClick={() => reset()}>Reset</button>
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