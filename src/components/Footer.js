import { h } from 'preact';

export default function Footer() {
	return (
		<footer class="main-footer">
			<div id="versao" class="pull-right hidden-xs" style={{ marginTop: 6 }}>
				Versão 1.0.0
  			</div>
			<strong>© 2019 Plataforma ESC</strong>
		</footer>

	);
}