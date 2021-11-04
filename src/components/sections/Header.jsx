import Navigation from "../Navigation/Navigation";

const Header = (props) => {
  const { title } = props;

 
  return (
    <>
      {window.location.pathname === "/" ? (
        <div className="home">
          <Navigation />
          <h1>{title}</h1>
          <div className="partnerWrapper"></div>
        </div>
      ) : (
        <div className="wrapperHeader">
          <Navigation />
          <h1>{title}</h1>
          <div className="partnerWrapper"></div>
        </div>
      )}
    </>
  );
};

export default Header;
