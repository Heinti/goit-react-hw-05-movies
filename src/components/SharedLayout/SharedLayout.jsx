import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css'
const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <NavLink className={css.header__link} to={'/'} end>
            Home
          </NavLink>
          <NavLink className={css.header__link} to={'movies'}>Movie</NavLink>
          {/* <hr /> */}
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
