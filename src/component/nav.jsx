import HomeIcon from "@heroicons/react/24/solid/HomeIcon";

import { Link } from "react-router-dom";
import { signOut } from "../utils/reqs";
import PropType from "prop-types";

const Nav = ({ isAuth, userId }) => {
  const logoutHandler = async () => {
    await signOut();
    localStorage.removeItem("_idSender");
    window.location.replace("/");
  };
  return (
    <nav className="bg-indigo-500 text-white">
      <ul className="flex flex-row items-center gap-2 p-2">
        <li>
          <img className="w-12" src="/logo.png" alt="Logo" />
        </li>
        <li>
          <Link to={"/"}>
            <HomeIcon className="h-6 w-6" />
          </Link>
        </li>
        {isAuth && (
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
        )}
        {!isAuth && (
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        )}
        {!isAuth && (
          <li>
            <Link to={"/signin"}>Sign In</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <Link to={`/user/${userId}`}>My Profile</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isAuth: PropType.bool,
  userId: PropType.string,
};

export default Nav;
