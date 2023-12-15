import { Form, NavLink } from "react-router-dom";
// library
import { TrashIcon } from "@heroicons/react/24/solid";

import logo from "../assets/logomark.svg";
const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="" height={30} />
        <span>Home Budget</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(e) => {
            if (!confirm("Are you sure want to logout?")) {
              e.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20}/>
          </button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
