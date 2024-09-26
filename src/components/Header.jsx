import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <nav className="flex justify-between py-8 px-6 bg-blue-300">
      <Logo />
      <ThemeSwitcher />
    </nav>
  );
};

export default Header;
