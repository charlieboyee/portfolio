import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import NavBar from './NavBar';
import './design/about.css';
import { Octokit } from 'octokit';

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

	useEffect(() => {
		console.log(languagesUsed);
	}, [languagesUsed]);
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
