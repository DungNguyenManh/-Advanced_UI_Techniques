import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
import CountryDropdown from '../CountryDropdown';

const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strips bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={"/"}><img src={Logo} alt='logo'></img></Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">
                                <CountryDropdown />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Header;