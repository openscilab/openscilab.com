import { lazy } from 'react';
import { Path } from './RouteRenderer';
import { Redirect } from 'react-router-dom';
import { CONFIG } from '../Config/constants';

export const routesArray: Path[] = [
	{
		exact: false,
		path: ['/', '/home'],
		component: lazy(() => import('../../Views/Pages/Home')),
	},
	{
		path: ['*'],
		exact: true,
		component: () => <Redirect to={CONFIG.BASE_URL} />,
	},
];

export default routesArray;
