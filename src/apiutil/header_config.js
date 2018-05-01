export const getHeader = () => {
  let currentUser;
  let jwt;
  if (localStorage.currentUser) {
    // need to be more careful parsing this string as json
    currentUser = JSON.parse(localStorage.currentUser);
    jwt = JSON.parse(currentUser.session_token).jwt;
  } else {
    return {};
  }
  return {'Authorization': `Bearer ${jwt}`};
}
