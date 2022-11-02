import { useRef, useEffect, useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import Footer from './Footer';
import TechStack from './TechStack';
import NavBar from './NavBar';
import { Nissan, RNProject } from './projects/';
import ProjectDisplayButton from './ProjectDisplayBUtton';
import './design/landing.css';

const Landing = () => {
	const projectsList = useRef();
	const techStackRef = useRef();
	const project1Ref = useRef();
	const project2Ref = useRef();

	const [projects, setProjects] = useState([]);

	const goToProjects = () => {
		projectsList.current.scrollIntoView({ behavior: 'smooth' });
	};

	const goToTechStack = () => {
		techStackRef.current.scrollIntoView({ behavior: 'smooth' });
	};
	const getProjects = async () => {
		try {
			const result = await fetch(`${process.env.REACT_APP_URL}projects`);
			if (result.status === 200) {
				const { data } = await result.json();
				setProjects(data);
			}
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getProjects();
	}, []);

	return (
		<Paper className='landing'>
			<NavBar />
			<section className='intro'>
				<Typography id='outer' variant='h2'>
					Hello, my name is{' '}
					<Typography color='primary' component='span' variant='h2'>
						Charles
					</Typography>
					. &nbsp; I'm a full stack developer.
				</Typography>

				<Button
					size='large'
					variant='outlined'
					color='primary'
					onClick={goToProjects}
				>
					View my work
				</Button>
				<Button
					size='large'
					variant='outlined'
					color='primary'
					onClick={goToTechStack}
				>
					See what I can use
				</Button>
			</section>
			<section className='techStack' ref={techStackRef}>
				<TechStack />
			</section>
			{projects.length ? (
				<>
					<section className='projectsList' ref={projectsList}>
						<Typography variant='h1'>My Projects</Typography>
						<div>
							{projects?.map((proj, key) => {
								return (
									<ProjectDisplayButton
										key={key}
										title={proj?.title}
										projectRefs={[project1Ref, project2Ref]}
										index={key}
									/>
								);
							})}
						</div>
					</section>

					<section className='project1' ref={project1Ref}>
						<RNProject project={projects[0]} />
					</section>

					<section className='project2' ref={project2Ref}>
						<Nissan project={projects[1]} />
					</section>
				</>
			) : (
				<section className='maintenance' ref={projectsList}>
					<Typography variant='h1'>
						This section is under maintenance
					</Typography>
				</section>
			)}

			<Footer />
		</Paper>
	);
};

export default Landing;
