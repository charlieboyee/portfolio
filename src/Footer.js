import { IconButton, Divider, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='top'>
				<section className='nameContainer'>
					<Typography color='primary'>Charles</Typography>

					<Divider />
					<Typography>Full Stack Developer</Typography>
				</section>

				<section className='socialLinks'>
					<IconButton href='https://github.com/' target='_blank'>
						<GitHubIcon
							href='https://www.linkedin.com/in/charles-park-484943160/'
							target='_blank'
						/>
					</IconButton>
					<IconButton>
						<LinkedInIcon />
					</IconButton>
				</section>
			</div>

			<Typography id='copyright' color='grey'>
				Charles Park <span>&#169;</span>
			</Typography>
		</div>
	);
};

export default Footer;
