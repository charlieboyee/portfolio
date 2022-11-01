import { Typography } from '@mui/material';
import './projectDisplayButton.css';
const ProjectDisplay = ({ title }) => {
	return (
		<Typography variant='h2' className='projectDisplayButton'>
			{title}
		</Typography>
	);
};

export default ProjectDisplay;
