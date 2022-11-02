import { useNavigate } from 'react-router-dom';
import { IconButton, Divider, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './design/footer.css';

const Footer = () => {
	const navigate = useNavigate();

	return (
		<footer className='footer'>
			<div className='top'>
				<section className='nameContainer'>
					<Typography color='primary'>Charles</Typography>

					<Divider />
					<Typography>Full Stack Developer</Typography>
				</section>

				<section className='socialLinks'>
					<IconButton href='https://github.com/' target='_blank'>
						<GitHubIcon />
					</IconButton>
					<IconButton
						href='https://www.linkedin.com/in/charles-park-484943160/'
						target='_blank'
					>
						<LinkedInIcon />
					</IconButton>
					<IconButton onClick={() => navigate('contact')}>
						<EmailIcon />
					</IconButton>
				</section>
			</div>

			<Typography variant='caption' id='copyright' color='grey'>
				Charles Park <span>&#169;</span>
			</Typography>
		</footer>
	);
};

export default Footer;
