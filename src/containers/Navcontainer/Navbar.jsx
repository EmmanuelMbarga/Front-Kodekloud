import SousMenu from "./sousMenu";
import SousMenu2 from "./sousMenu2";
import SousMenu3 from "./sousMenu3";

// const codeKloude="https://www.google.com/url?sa=i&url=https%3A%2F%2Fkodekloud.com%2F&psig=AOvVaw3HpZL7RvY7awTcvV5yAX3v&ust=1709841200674000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDolI614IQDFQAAAAAdAAAAABAJ"
const kodekloude = `https://searchvectorlogo.com/wp-content/uploads/2021/11/kodekloud-logo-vector.png`;

const menuBurger = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const NavbarComponent = () => {
  return (
    <nav className="Menukode">
      <div className="Navlogo">
        <img src={kodekloude} alt="kodekloud" className="w-[10em]" />
      </div>
      <ul className="NavMenu">
        <li className="Navelements">Business</li>
        <li className="Navelements">Pricing</li>
        <li className="Navelements">Playgrounds</li>
        <li>
          <ChevronDown id="Playgrounds" titre="Learning Paths" />
          <SousMenu />
        </li>
        <li>
          <ChevronDown id="Resources" titre="Resources" />
          <SousMenu2 />
        </li>
        <li>
          <ChevronDown id="More" titre="More" />
          <SousMenu3 />
        </li>
        <li className="Navelements">Login</li>
        <button className="NavelementsButton">Join now</button>
      </ul>
      <ul className="Nav-menuBurger">{menuBurger}</ul>
    </nav>
  );
};

export default NavbarComponent;
// composant pour les chevons-Bas
const ChevronDown = (props) => {
  const chevronBas = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5 font-bold"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
        id={props.id}

      />
    </svg>
  );

  // const handlerCliked=(e)=>{

  //     console.log(e.target.__reactProps$dx6c6it7kaf.children.props.id);
  // }
  const handlerCliked = (e) => {
    console.log(e);
  };

  return (
    <>
      <span className="NavelementsForm">
        <a href="#">{props.titre}</a>
        {/* <button onClick={handlerCliked}>{chevronBas}</button> */}
        <button onClick={handlerCliked}>
          <span>{chevronBas}</span>
        </button>
      </span>
    </>
  );
};
