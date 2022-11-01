import { Typography } from '@mui/material';
import { useContext } from 'react';
import { ColorContext } from './App';
import './projectDisplayButton.css';
const ProjectDisplay = ({ title, projectRefs, index }) => {
	const { mode } = useContext(ColorContext);
	return (
		<Typography
			variant='h2'
			className={`projectDisplayButton ${mode} ${title}`}
			onClick={() =>
				projectRefs[index].current.scrollIntoView({ behavior: 'smooth' })
			}
		>
			{title}
		</Typography>
	);
};

export default ProjectDisplay;
