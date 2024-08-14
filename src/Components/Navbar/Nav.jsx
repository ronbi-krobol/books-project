import { NavLink } from "react-router-dom";



const Nav = () => {

    const links = <>

        <li className="lg:mr-4"><NavLink to="/">Home </NavLink></li>
        <li className="lg:mr-4"><NavLink to="/listedbooks">Listed Books </NavLink></li>
        <li className="lg:mr-4"><NavLink to="/pagesread">Pages to Read </NavLink></li>

    </>



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <a className="btn bg-green-500 w-28 h-4">Sign In</a>
                    <a className="btn bg-teal-300 w-28 h-4">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;