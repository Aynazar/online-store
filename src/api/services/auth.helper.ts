import Cookies from "js-cookie";

export const getAccessToken = () => {
  const accessToken = Cookies.get("accessToken");

  return accessToken || null;
};

export const setAccessToken = (name: string, value: string) => {
  Cookies.set(name, value, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
};
