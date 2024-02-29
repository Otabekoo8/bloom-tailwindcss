import { Head } from "../Head/Head";
import { Navbar } from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="container mx-auto flex">
      <Head />
      <Navbar />
    </div>
  );
};

export default Header;
