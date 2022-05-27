import { useDispatch, useSelector } from "react-redux";
import { Home } from "./Home";
import { Login } from "./login";
import { Login_detail } from "../redux/actions";

export const Showuser = () => {
  const dispatch = useDispatch();

  const token = useSelector((e) => e.token);
  const localToken = localStorage.getItem("token");
  dispatch(Login_detail(localToken));

  return <>{!token ? <Login /> : <Home />}</>;
};
