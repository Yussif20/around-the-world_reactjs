import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';

const Logo = () => {
  return (
    <Link to="/" className="flex gap-3 items-center text-xl font-semibold">
      <img src={logoImg} alt="Logo" />
      Around the world
    </Link>
  );
};

export default Logo;
