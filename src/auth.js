export function isAuthenticated() {
	return !!sessionStorage.getItem('token');
}

export function logout() {
	sessionStorage.removeItem('token');
}

export function auth(token){
	sessionStorage.setItem('token', token)
}