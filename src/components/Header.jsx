const Header = ({handlePage}) => {

  return (
    <>
      <nav className="app-header navbar navbar-light bg-light d-flex align-items-center px-3">
        <a className="navbar-brand">Nice</a>
        <ul className="center d-flex align-items-center gap-3">
          <li onClick={()=>handlePage('Home')} className="items">Home</li>
          <li onClick={()=>handlePage('Usage')} className="items">Usage</li>
          <li onClick={()=>handlePage('Setting')} className="items">Setting</li>
        </ul>
        <button className="btn btn-danger my-2 my-sm-0" type="submit">
          Logout
        </button>
      </nav>
    </>
  );
};

export default Header;
