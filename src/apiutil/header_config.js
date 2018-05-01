
let currentUser;
let jwt;
if (localStorage.currentUser) {
  currentUser = JSON.parse(localStorage.currentUser);
  jwt = JSON.parse(localStorage.currentUser);
}
export const header = localStorage.currentUser ? {'Authorization': `Bearer ${jwt}`} : {};
