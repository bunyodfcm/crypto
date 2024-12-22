// import logo from "../../assets/images/home/logo.jpg";
import Language from "./components/Language";

const Header = () => {
  return (
    <div className="bg-bg">
      <div className="container h-24 flex justify-between items-center">
        <div className="flex flex-col items-center font-rye font-semibold text-primary tracking-widest uppercase">
          <span>crypto</span>
          <span>INVEST</span>
          {/* <img src={logo} alt="logo" className="h-full" /> */}
        </div>
        <ul className="flex gap-8">
          <li>HOW IT WORKS</li>
          <li>CRYPTOS</li>
          <li>FEATURES</li>
          <li>TESTIMONIAL</li>
          <li>UNIVERSITY</li>
        </ul>
        <Language />
      </div>
    </div>
  );
};

export default Header;
