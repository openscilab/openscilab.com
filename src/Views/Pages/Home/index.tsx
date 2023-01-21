import './index.scss';
import ReactLogo from '../../../Assets/icons/react.svg';
import { Swiper, SwiperSlide } from '@components/Swiper/Swiper';

const Home = () => {
	return (
		<div className='home-layout'>
			<img className='animate-spin-slow' src={ReactLogo} alt='react-logo' />
			<h1>React Boilerplate</h1>
			<div className='sw-con'>
				<Swiper keyboard mousewheel direction='vertical' autoplay={{ delay: 2000, disableOnInteraction: false }}>
					{FEATURES?.map((n, i) => (
						<SwiperSlide key={i}>{n}</SwiperSlide>
					))}
				</Swiper>
			</div>
			<p>AHQ Team</p>
		</div>
	);
};

const FEATURES = [
	'Typescript',
	'Sass',
	'Less',
	'Tailwind',
	'Rsuite',
	'Redux',
	'FontAwesome',
	'Swiper',
	'Webpack',
	'Craco',
	'Custom Hooks',
	'Custom Components',
];

export default Home;
