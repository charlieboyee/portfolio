import { useState } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './cube.css';

const Cube = () => {
	const theme = useTheme();
	const [open, setOpen] = useState('');
	const openCube = () => {
		setOpen('open');
	};

	return (
		<div className={`cube ${open}`}>
			<div className='panel top'></div>
			<div className='panel middle'></div>
			<div className='panel left'></div>
			<div className='panel right'></div>
			<div className='panel bottom'>
				<Button onClick={openCube}>Click me</Button>
			</div>
		</div>
	);
};

export default Cube;
