import { FC } from 'react';
import { Notify } from '../../Tools/Utils/React';
import useStore from '../../Tools/Store/useStore';
import useRole from '@tools/Hooks/useRole/useRole';
import useAccount from '../../Tools/Hooks/useAccount';
import { RoleProps } from '../../Components/Role/Role';
import { Redirect, useHistory } from 'react-router-dom';
import { isTokenValid } from '../../Tools/Hooks/useAccount';
import { logout } from '../../Tools/Store/actions/AccountActions';

export const GuestPath: FC = ({ children }) => {
	const { dispatch } = useStore();
	const { loggedIn, user } = useAccount();
	if (loggedIn && !isTokenValid(user?.token)) dispatch(logout());
	if (loggedIn) return <Redirect to='/dashboard' />;
	return <>{children}</>;
};

export const AuthPath: FC = ({ children }) => {
	const { dispatch } = useStore();
	const { location, push } = useHistory();
	const { loggedIn, user } = useAccount();

	const key = 'redirect-path-after-auth';

	if (loggedIn && !isTokenValid(user?.token)) dispatch(logout());

	if (loggedIn) {
		const redirectTo = localStorage?.getItem(key);
		if (redirectTo) {
			localStorage.removeItem(key);
			push(redirectTo);
		}
	} else {
		localStorage.setItem(key, location?.pathname);
		return <Redirect to='/login' />;
	}

	return <>{children}</>;
};

export const RolePath: FC<RoleProps> = ({ children, is, not }) => {
	const { isRole } = useRole();

	const PERMISSION_ERROR_MESSAGE = `You do not have permission to access this page.`;

	// const PERMISSION_ERROR_CONTACT_ADMIN =
	// 	'If you believe this is a mistake, please contact your system administrator.';

	if (is?.length && !is?.some(r => isRole(r))) {
		Notify.info(PERMISSION_ERROR_MESSAGE);
		// Notify.info(PERMISSION_ERROR_CONTACT_ADMIN);
		return <Redirect to='/dashboard/order' />;
	}

	if (not?.length && not.some(r => isRole(r))) {
		Notify.info(PERMISSION_ERROR_MESSAGE);
		// Notify.info(PERMISSION_ERROR_CONTACT_ADMIN);
		return <Redirect to='/dashboard/orders' />;
	}

	return <>{children}</>;
};

const Guard = { AuthPath, GuestPath };

export default Guard;
