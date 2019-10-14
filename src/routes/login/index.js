import { h, Component } from 'preact';
import './style.css';
import { Col, Form, Button, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router';

export default class Login extends Component {

	state = {
		username: '',
		password: '',
		loading: false,
	};

	showAlert = (message) => {
		let alert = document.getElementById('alert');
		alert.style.display = message ? 'block' : 'none';
		alert.innerHTML = message;
	}

	onInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submitForm = e => {
		console.log(this.state);
		e.preventDefault();

		let options = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.state)
		}

		this.setState({ loading: true });
		fetch('http://localhost/CursoAdiantiPreact/rest.php', options)
			.then(this.handleResponse)
			.then(ret => {
				if (ret.status === 'error') {
					this.showAlert(ret.data);
				} else {
					sessionStorage.setItem('token', ret.data);
					location.href = "/";
				}
			})
			.catch(error => {
				this.showAlert(error.message);
			})
	}

	handleResponse = response => {
		this.setState({ loading: false });
		return response.text().then(text => {
			const data = text && JSON.parse(text);
			if (!response.ok) {
				if (response.status === 401) {
					// auto logout if 401 response returned from api
					logout();
					location.reload(true);
				}

				const error = (data && data.message) || response.statusText;
				return Promise.reject(error);
			}

			return data;
		});
	}

	render(_, { loading }) {
		return (
			<div class="login_wrapper" id="login-wrapper">
				<div class="overlay"  style={{ display: loading ? "block" : "none" }}>
					<div class="overlay-content">
						<img src="assets/img/loading.gif" style={{ width: 50, height: 50, margin: "auto" }} />
						<h4>Aguarde...</h4>
					</div>
				</div>
				<div class="panel panel-default div_panel_default" widget="bootstrapformbuilder" form="form_login" id="bform_1757563965">
					<div class="panel-heading div_panel_heading">
						<div class="panel-title" style={{ padding: 5, float: 'left' }}>Login</div>
					</div>
					<Form class="form-horizontal" type="bootstrap" name="form_login" id="form_login" onSubmit={this.submitForm}>
						<div class="panel-body" style={{ width: '100%' }}>

							<Form.Group class="tformrow ">
								<Col sm={12} class="fb-field-container " style={{ minHeight: 26 }}>
									<div class="fb-inline-field-container " style={{ display: 'inline-block', verticalAlign: 'top', float: 'left', paddingRight: 10 }}>
										<span style={{ float: 'left', marginLeft: 44, height: 35 }} class="login-avatar">
											<span class="glyphicon glyphicon-user" />
										</span>
									</div>
									<div class="fb-inline-field-container form-line" style={{ display: 'inline-block', verticalAlign: 'top', float: 'left', width: '70%' }}>
										<Form.Control onInput={this.onInput} class="tfield" type="text" placeholder="Usuário" autofocus="autofocus" name="username" />
									</div>
								</Col>
							</Form.Group>
							<Form.Group class="tformrow ">
								<Col sm={12} class="fb-field-container " style={{ minHeight: 26 }}>
									<div class="fb-inline-field-container " style={{ display: 'inline-block', verticalAlign: 'top', float: 'left', paddingRight: 10 }}>
										<span style={{ float: 'left', marginLeft: 44, height: 35 }} class="login-avatar">
											<span class="glyphicon glyphicon-lock" />
										</span>
									</div>
									<div class="fb-inline-field-container form-line" style={{ display: 'inline-block', verticalAlign: 'top', float: 'left', width: '70%' }}>
										<Form.Control onInput={this.onInput} class="tfield" widget="tpassword" placeholder="Senha" name="password" type="password" />
									</div>
								</Col>
							</Form.Group>

						</div>
						<div class="panel-footer" style={{ width: '100%' }}>
							<Button type="submit" id="tbutton_btn_entrar" className="btn_entrar" name="btn_entrar" variant="primary">
								<span>Entrar</span>
							</Button>
						</div>
					</Form>
				</div>
				<div class="alert alert-danger" id="alert" style={{ display: 'none' }}></div>
			</div>

		);
	}
}