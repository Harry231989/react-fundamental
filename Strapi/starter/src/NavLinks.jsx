import { useGlobalContext } from "./Context";
import newProducts from './data';



const NavLinks = () => {
  const {setPageId} = useGlobalContext()
  return (
    <div className='nav-links'>
      {newProducts.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId()}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default NavLinks