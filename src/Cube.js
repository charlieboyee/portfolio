import { useState } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './cube.css';

const Cube = ({ project1Ref }) => {
	const theme = useTheme();
	const [open, setOpen] = useState('');
	const openCube = () => {
		setOpen('open');
	};

	return (
		<div className={`cube ${open}`}>
			<div className='panel top'>
				<Typography
					onClick={() =>
						project1Ref.current.scrollIntoView({ behavior: 'smooth' })
					}
				>
					Photo Cacher
				</Typography>
			</div>

			<div className='panel middle'>
				<Typography>My Projects</Typography>
			</div>
			<div className='panel right'>
				<Typography>Coming Soon</Typography>
			</div>
			<div className='panel left'>
				<Typography>One Piece</Typography>
			</div>
			<div className='panel bottom'>
				{!open ? (
					<Typography onClick={openCube}>Click me!</Typography>
				) : (
					<Typography>Coming Soon</Typography>
				)}
			</div>
		</div>
	);
};

export default Cube;
