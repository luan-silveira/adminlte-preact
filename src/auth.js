export function isAuthenticated() {
	return !!localStorage.getItem('token');
}

export function logout() {
	localStorage.removeItem('token');
}

export function auth(token){
	localStorage.setItem('token', token)
}