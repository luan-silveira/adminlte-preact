import { h, render } from "preact";
import App from "./components/app";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./routes/login";
import Home from "./routes/home";
import { logout } from "./auth";
import EmpresasList from "./routes/Clientes/Empresas";
import Panel from "./components/widgets/panel";

function Main() {
	return (
		<div id="app">
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<App>
						<PrivateRoute exact path="/" />
						<PrivateRoute path="/home" component={Home} />
						<PrivateRoute path="/empresas" component={EmpresasList} />
						<Route path="/logout" render={props => {
							logout();
							return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
						}}/>
					</App>
				</Switch>
			</Router>
		</div>
	);
}

render(<Main />, document.body);