const API_URL = process.env.REACT_APP_API_URL;

export class Login {
  static login = (action) => {
    return fetch(`${API_URL}/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(action.payload),
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        return data;
      });
  };

  static logout = () => {
    return fetch(`${API_URL}/logout`, {
      method: "delete",
      // headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('access_token')}` }
    })
      .then((response) => response.json())
      .then((data) => ({ data }))
      .catch((error) => ({ error }));
  };

  static getRefreshToken = () => {
    return fetch(`${API_URL}/refresh`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refresh_token")}`,
      },
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        return data;
      });
  };
}
