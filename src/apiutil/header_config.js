export const header = localStorage.currentUser ? {'Authorization': `Bearer ${JSON.parse(localStorage.currentUser).session_token}`} : {};
