import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";



const Navbar = () => {
    const { logOut, user, loading } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('Logged out successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }
    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        
        
        <li><NavLink to='/location'>My Property Location</NavLink></li>
        <li><NavLink to='/reviews'>Reviews</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl ">Residential-Era</a>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    loading ? (
                        // Show loading spinner while data is loading
                        <div><span className="loading loading-infinity loading-lg"></span></div>
                    ) : user ? (
                        // Show user data when available
                        <>
                            {/* <p className="hidden md:block lg:block">{user.displayName}</p> */}
                            <div className="btn btn-ghost btn-circle avatar flex">
                                <div  className={`w-10 rounded-full hover:${user.displayName}`}>
                                    <img src={user.photoURL} title={user.displayName || 'No User Name'} alt="User Avatar" />
                                </div>
                            </div>
                            <button className="btn btn-outline btn-accent" onClick={handleSignOut}>Logout</button>
                        </>
                    ) : (
                        // Show login button if no user is logged in
                        <Link className="btn btn-outline btn-success" to='/login'>Login</Link>
                    )
                }

                



            </div>
        </div>
    );
};

export default Navbar;