export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  });
};
