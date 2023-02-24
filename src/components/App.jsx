import { Route, Routes, NavLink } from "react-router-dom";


export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/'} end>
              Home
        </NavLink>
        <NavLink to={'/'} end>
              Movie
        </NavLink>
        
      </nav>
    </div>
  );
};
