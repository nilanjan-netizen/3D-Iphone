import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* <img src={appleImg} alt="Apple" width={30} height={18} /> */}
        <a href="https://www.apple.com/in/" target="_blank" rel="noopener noreferrer">
  <img src={appleImg} alt="Apple" width={40} height={40} />
</a>


        {/* <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div> */}
        <div className="flex flex-1 justify-center max-sm:hidden">
  {navLists.map((nav) => (
    <a
      key={nav.label}
      href={nav.url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 text-3xl cursor-pointer text-gray hover:text-white transition-all"
    >
      {nav.label}
    </a>
  ))}
</div>


        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          {/* <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} /> */}
          <a href="https://www.flipkart.com/search?q=apple" target="_blank" rel="noopener noreferrer">
  <img src={searchImg} alt="search" width={40} height={40} />
</a>

<a href="https://www.flipkart.com/viewcart?otracker=Cart_Icon_Click" target="_blank" rel="noopener noreferrer">
  <img src={bagImg} alt="bag" width={40} height={40} />
</a>

        </div>
      </nav>
    </header>
  )
}

export default Navbar