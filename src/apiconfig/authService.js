import http from "./http";
import API_PATH from "./apiPath";

//Admin Login
export async function AdminLoginapi(data) {
  return http.apiurl.post(API_PATH.apiAdminLogin, data);
}

export const UserLogout = async () => {
  try {
    localStorage.clear();
  } catch (err) {
    return alert("Logout Failed");
  }
};
