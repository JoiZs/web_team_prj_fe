import PropTypes from "prop-types";
import Nav from "../component/nav";
import { authTest } from "../utils/reqs";
import { useLayoutEffect, useState } from "react";

function Withnav(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  useLayoutEffect(() => {
    const checkauth = async () => {
      const res = await authTest();

      if (res.type == "success") {
        setIsAuth(true);
        setUserId(res.message);
        localStorage.setItem("_idSender", res.message);
      }
    };

    return () => checkauth();
  }, []);

  return (
    <div className="h-[100dvh] flex flex-col">
      <Nav isAuth={isAuth} userId={userId} />
      <div className="flex-1">{props.children}</div>
    </div>
  );
}

Withnav.propTypes = { children: PropTypes.element };

export default Withnav;
