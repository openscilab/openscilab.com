import { FC } from 'react';
import FaIcon from './FaIcon';
import { Button, ButtonProps } from 'rsuite';
import { IconNames } from '../Assets/fontawesome/fa.names';
import { useHistory } from 'react-router-dom';

type FaButtonProps = ButtonProps & { fa?: IconNames; goBack?: boolean };

const FaButton: FC<FaButtonProps> = ({ fa, goBack, children, className, ...rest }) => {
	const { goBack: goPre } = useHistory();
	return (
		<Button
			className={`fa-btn ${fa}-btn  ${className}`}
			onClick={() => goBack && goPre()}
			{...rest}>
			{fa && <FaIcon fa={fa} />}
			{children}
		</Button>
	);
};

export default FaButton;
