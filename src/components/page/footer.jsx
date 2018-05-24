//react
import React from 'react';

const Footer = () => {
	return (
		<div className="footer-container">
			<span>
				<a href="/Social_Media/index.jsp">
					<img
						style={{ margin: '0px 3px -2px 0px' }}
						src="http://ttc.ca/images/fixedImages/youtube_footer_icon.gif"
						alt="youtube"
					/>
					<img
						style={{ margin: '0 3px -2px 0' }}
						src="http://ttc.ca/images/fixedImages/linkdin_footer_icon.gif"
						alt="Linkedin"
					/>
					<img
						style={{ margin: '0 0 -2px 0' }}
						src="http://ttc.ca/images/fixedImages/twitter_footer_icon.gif"
						alt="twitter"
					/>
					<img
						style={{ margin: '0 3px -2px' }}
						src="http://ttc.ca/images/fixedImages/facebook_footer_icon.gif"
						alt="facebook"
					/>{' '}
					Social Media
				</a>
			</span>

			<span style={{ padding: '1px 8px 0' }}>
				<img
					style={{ margin: '0 3px -2px 0' }}
					src="http://ttc.ca/images/fixedImages/mobile_icon.gif"
					alt="mobile icon"
				/>
				<a href="http://m.ttc.ca"> Mobile Site</a>
			</span>
			<span style={{ padding: '1px 8px 0' }}>
				<a href="http://ttc.ca/RSS/index.jsp">
					<img
						style={{ margin: '0 3px -2px 0' }}
						src="http://ttc.ca/images/fixedImages/rss_icon_small.gif"
						alt=""
					/>{' '}
					RSS Feeds
				</a>
			</span>
		</div>
	);
};

export default Footer;
