import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-amber-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border-2 border-white bg-amber-800 flex items-center justify-center">
              <Icon name="Feather" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-wide">
              DUSKWOOD LIBRARY SEARCH
            </h1>
          </div>

          <nav className="flex space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive("/") ? "bg-white text-amber-900" : "hover:bg-amber-800"
              }`}
            >
              <Icon name="Home" size={18} />
              <span>Главная</span>
            </Link>

            <Link
              to="/catalog"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive("/catalog")
                  ? "bg-white text-amber-900"
                  : "hover:bg-amber-800"
              }`}
            >
              <Icon name="Library" size={18} />
              <span>Каталог</span>
            </Link>

            <Link
              to="/search"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isActive("/search")
                  ? "bg-white text-amber-900"
                  : "hover:bg-amber-800"
              }`}
            >
              <Icon name="Search" size={18} />
              <span>Поиск</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
