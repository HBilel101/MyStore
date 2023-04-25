export const url = "http://loadbalancer1-1268672774.us-east-1.elb.amazonaws.com";
export const apiUrl = `${url}/api`
export const setHeaders = () => {
  const headers = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};