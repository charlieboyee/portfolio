import { Button, Divider, Chip, Typography } from '@mui/material';
import NissanDemo from '../assets/nissanMockDemo.mp4';
import './nissan.css';

const Nissan = ({ project }) => {
	return (
		<>
			<section className='left'>
				<video autoPlay loop muted>
					<source src={NissanDemo} type='video/mp4' />
				</video>
			</section>
			<section className='right'>
				<Typography id='title' variant='h1'>
					{project.title}
				</Typography>
				<div className='projectLinks'>
					<Button
						variant='contained'
						href={project.links.liveDemo}
						target='_blank'
					>
						Live Demo
					</Button>
					<Button
						variant='contained'
						href={project.links.gitHub}
						target='_blank'
					>
						View Github
					</Button>
				</div>
				<Typography variant='h4'>{project.header}</Typography>
				<Divider flexItem>
					<Chip label='Features' />
				</Divider>
				{project.features.map((text, key) => {
					return <Typography key={key}>{text}</Typography>;
				})}
				<Divider flexItem>
					<Chip label='Tech Stack' />
				</Divider>
				<div className='techUsed'>
					{project.techStack.map((tech, key) => {
						return (
							<Button
								variant='outlined'
								key={key}
								href={tech[Object.keys(tech)[0]]}
								target='_blank'
							>
								{Object.keys(tech)[0]}
							</Button>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Nissan;
