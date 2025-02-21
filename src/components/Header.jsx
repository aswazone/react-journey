const Header = () => {
  return (
    <>
      <nav className="app-header navbar navbar-light bg-light d-flex align-items-center px-3">
        <a className="navbar-brand">Nice</a>
        <ul className="center d-flex align-items-center gap-3">
          <li className="items">Home</li>
          <li className="items">Usage</li>
          <li className="items">Setting</li>
        </ul>
        <button className="btn btn-danger my-2 my-sm-0" type="submit">
          Logout
        </button>
      </nav>
    </>
  );
};

export default Header;
