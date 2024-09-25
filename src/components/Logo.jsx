import logoImg from '../assets/logo.svg';

const Logo = () => {
  return (
    <a className="flex gap-3 items-center text-xl font-semibold">
      <img src={logoImg} alt="Logo" />
      Around the world
    </a>
  );
};

export default Logo;
