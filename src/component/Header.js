import { LOGO_URL } from '../utils/constent'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const onlineStatus = useOnlineStatus()
  const cart = useSelector((store) => store.cart.item)
  const { userName } = useContext(UserContext)
  const [loginBtn, setLoginBtn] = useState("LogIn")

  return (
    <div className="flex justify-between bg-pink-100">
      <img
        alt='header-logo'
        className="w-32"
        src={LOGO_URL}
      />
      <div class="flex">
        <ul className='flex items-center'>
          <li className='px-2'>
            {
              onlineStatus === true ? 'you are online' : 'you are offline'
            }
          </li>
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/about'>About us</Link>
          </li>
          <li className='px-2'>
            <Link to='/contactus'>Contact us</Link>
          </li>
          <Link to='/cart'>
            <li className='px-2 font-bold'>Card-{cart.length}Item</li>
          </Link>
          <button onClick={() => loginBtn === 'LogIn' ? setLoginBtn("LogOut") : setLoginBtn("LogIn")}>{loginBtn}</button>
          <li className='px-2'>{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header