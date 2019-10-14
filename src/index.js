import { h, render } from "preact";
import App from "./components/app";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./routes/login";
import Home from "./routes/home";
import { logout } from "./auth";
import Empresas from "./routes/Clientes/Empresas";
import EmpresasList from "./routes/Clientes/Empresas/EmpresasList";
import EmpresaView from "./routes/Clientes/Empresas/EmpresaView";

function Main() {
	return (
		<div id="app">
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<App>
						<PrivateRoute exact path="/" />
						<PrivateRoute path="/home" component={Home} />
						<PrivateRoute exact path="/empresas" component={EmpresasList} />
						<PrivateRoute path="/empresas/:empid" component={EmpresaView} />
						<Route path="/logout" render={props => {
							logout();
							return (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />);
						}} />
					</App>
				</Switch>
			</Router>
		</div>
	);
}

render(<Main />, document.body);