import { h } from 'preact'
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		isAuthenticated()
			? <Component {...props} />
			: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
	)} />
)