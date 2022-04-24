import LeftNav from "./LeftNav";
import TopNav from "./TopNav";
import RightNav from "./RightNav";
import './style.scss';

const Navbar = () => {
  return (
    <>
      <TopNav/>
      <LeftNav/>
      <RightNav/>
    </>
  )
}

export default Navbar;