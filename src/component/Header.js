import { LOGO_URL } from '../utils/constent'
import { useContext, useState } from 'react';
import { href, Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegCircle } from 'react-icons/fa'

const Header = () => {
  const onlineStatus = useOnlineStatus()
  const navigate = useNavigate
  const cart = useSelector((store) => store.cart.item)
  const { userName } = useContext(UserContext)
  const [loginBtn, setLoginBtn] = useState("LogIn")

  return (
    <div className="flex justify-between bg-pink-100 fixed z-10 h-20 w-full">
      <Link to={'/'}>
        <img
          alt='header-logo'
          className="w-32 h-20"
          src={LOGO_URL}
        />
      </Link>
      <div class="flex">
        <ul className='flex items-center'>
          <li className='px-2'>
            {
              onlineStatus === true ? <FaRegCircle style={{ background: 'green' }} /> : <FaRegCircle style={{ background: 'red' }} />
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