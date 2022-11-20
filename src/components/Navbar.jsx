import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false);
    console.log(active);
    console.log(toggle);

    return (
        <nav className="flex justify-between items-center w-full py-6 navbar">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

            <ul className="sm:flex list-none hidden  ">
                {navLinks.map((nav, index) => (
                    <li
                        key={index}
                        className={`font-poppins font-normal cursor-pointer text-[16px] ${
                            active === nav.title ? 'text-white' : 'text-dimWhite'
                        } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}
                        onClick={() => setActive(nav.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)}
                />
                <div
                    className={`${
                        !toggle ? 'hidden' : 'flex'
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex flex-col">
                        {navLinks.map((nav, index) => (
                            <li
                                key={index}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                    active === nav.title ? 'text-white' : 'text-dimWhite'
                                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
