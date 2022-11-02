import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import NavBar from './NavBar';
import { Octokit } from 'octokit';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Pie } from 'react-chartjs-2';
import './design/about.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const CustomCard = (props) => {
	console.log(props);
	return (
		<Card className='cards' raised elevation={24} sx={props.sx}>
			{props.children}
		</Card>
	);
};

const About = () => {
	const [languagesUsed, setLanguagesUsed] = useState(null);

	const getLanguagesUsed = async () => {
		try {
			const result = await fetch(`${process.env.REACT_APP_URL}getOctoKitToken`);
			if (result.status === 200) {
				const { token } = await result.json();
				const octokit = new Octokit({
					auth: token,
				});

				const {
					data: { login },
				} = await octokit.rest.users.getAuthenticated();
				const repos = await octokit.request('GET /user/repos', {});
				const proms = repos.data?.map(async (repo, key) => {
					if (repo.name === 'LETS') return;
					try {
						const { data } = await octokit.request(
							'GET /repos/{owner}/{repo}/languages',
							{
								owner: login,
								repo: repo?.name,
							}
						);
						return data;
					} catch (err) {
						console.log(err);
						return;
					}
				});

				let countObj = {};

				const langs = await Promise.all(proms);
				langs.forEach((item, key) => {
					if (item !== undefined) {
						Object.keys(item).forEach((lang, k) => {
							if (countObj[lang] === undefined) {
								countObj[lang] = 0;
							} else {
								countObj[lang] += 1;
							}
						});
					}
				});
				setLanguagesUsed(countObj);
			}
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getLanguagesUsed();
	}, []);
	return (
		<Paper className='about'>
			<NavBar />
			<main>
				<section className='left'>
					<Typography variant='h2'>Education</Typography>
					<CustomCard
						sx={{ backgroundColor: 'primary.dark', color: 'common.white' }}
					>
						<CardContent>
							<Typography variant='h4'>Coding Experience</Typography>
							<Typography variant='h6' component='li'>
								React
							</Typography>
							<Typography variant='h6' component='li'>
								React Native w/ Expo
							</Typography>
							<Typography variant='h6' component='li'>
								Auth Services (Firebase and some AWS)
							</Typography>
							<Typography variant='h6' component='li'>
								SQL/PostgreSQL
							</Typography>
							<Typography variant='h6' component='li'>
								Nodejs w/Express.js
							</Typography>
							<Typography variant='h6' component='li'>
								JS, HTML, CSS (Material UI for design)
							</Typography>
						</CardContent>
					</CustomCard>
					<CustomCard
						sx={{ backgroundColor: 'secondary.dark', color: 'common.white' }}
					>
						<CardContent>
							<Typography variant='h4'>
								CSUN (California State University of Northridge)
							</Typography>

							<Typography variant='h6' component='li'>
								B.S. (Hospitality & Recreation Management)
							</Typography>
						</CardContent>
					</CustomCard>
					<Typography variant='h2'>Interests</Typography>

					<CustomCard
						sx={{ backgroundColor: 'secondary.main', color: 'common.white' }}
					>
						<CardContent>
							<Typography variant='h6' component='li'>
								Cars
							</Typography>
							<Typography variant='h6' component='li'>
								Photography
							</Typography>
							<Typography variant='h6' component='li'>
								Hiking
							</Typography>
							<Typography variant='h6' component='li'>
								Biking
							</Typography>
						</CardContent>
					</CustomCard>
				</section>
				<section className='right'>
					{/* fill this are with leet code and hacker rank question stats */}
					{languagesUsed && (
						<div id='pieContainer'>
							<Pie
								data={{
									labels: Object.keys(languagesUsed),
									datasets: [
										{
											label: 'Languages Used',
											data: Object.values(languagesUsed),
											backgroundColor: [
												'rgba(255, 99, 132, 0.2)',
												'rgba(54, 162, 235, 0.2)',
												'rgba(255, 206, 86, 0.2)',
												'rgba(75, 192, 192, 0.2)',
												'rgba(153, 102, 255, 0.2)',
												'rgba(255, 159, 64, 0.2)',
											],
											borderColor: [
												'rgba(255, 99, 132, 1)',
												'rgba(54, 162, 235, 1)',
												'rgba(255, 206, 86, 1)',
												'rgba(75, 192, 192, 1)',
												'rgba(153, 102, 255, 1)',
												'rgba(255, 159, 64, 1)',
											],
											borderWidth: 3,
										},
									],
								}}
							/>
							<Typography variant='caption' color='grey'>
								Data from personal github
							</Typography>
						</div>
					)}
				</section>
			</main>
		</Paper>
	);
};

export default About;
