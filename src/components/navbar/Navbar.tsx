import { NavLink } from "react-router-dom";

export const Navbar = () => {
    
    return (
      <div>
        <nav className="navigation">
          <div className="nav-brand">
            <NavLink to="/quiz" className="link">
             FE QUIZ
            </NavLink>
          </div>
  
          <ul className="list-non-bullet nav-pills">
            <li className="list-item-inline">
              <NavLink to="/login" className="link link-active">
                Login
              </NavLink>
            </li>
            <li className="list-item-inline">
              <NavLink to="/login" className="link link-active">
                User
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  };