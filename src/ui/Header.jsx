import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
function Header() {
  return (
    <header className="broder-stone-200 flex items-center justify-between border-b-2 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-wides">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
