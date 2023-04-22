export const url = "http://localhost:5000";
export const apiUrl = `${url}/api`
export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};