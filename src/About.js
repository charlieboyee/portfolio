import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import NavBar from './NavBar';
import './design/about.css';
const About = () => {
	return (
		<Paper className='about'>
			<NavBar />
			<Typography>Hey there!</Typography>
			<Typography>Here's a little bit more about me</Typography>
			<Card>
				<CardContent>
					<Typography>Education</Typography>
				</CardContent>
			</Card>
			{/* Education */}
			{/* hobbies */}
			{/* Age under 30 :] */}
			{/* leet code problems completed */}
			{/* hacker rank problems completed */}
		</Paper>
	);
};

export default About;
