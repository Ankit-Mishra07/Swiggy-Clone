import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { userDataaction } from "../Redux/UserData/action";
import style from "../Styles/Navbar.module.css";


export const Navbar = () => {

   const {userData} = useSelector(state => state.userState)
   
   const [logbox, setLogbox] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
   const handleLogout = () => {
       dispatch(userDataaction(null))
       navigate("/")
   }
    
    return (
    <>
    <div className={style.navbar}>
        <div className={style.left}>
            <img src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"/>
            <p><u>{userData[0].location}</u></p>
            <i className="fas fa-angle-down"></i>
        </div>
        <div className={style.right}>
            <i className="fas fa-search"><span className="spann">Search</span></i>
            <i class="fas fa-percentage"><span className="spann">Offers</span></i>
            <i class="far fa-life-ring"><span className="spann">Help</span></i>
            <i class="fas fa-user"><span className="spann" onMouseOver={() => setLogbox(true)} onMouseLeave={() => setLogbox(false)}>{userData[0].name}
           {logbox && <div className={style.forLogoutBox}>
            <div>Profile</div>
            <div>Orders</div>
            <div>Swiggy One</div>
            <div>Favourites</div>
            <div onClick={() => handleLogout()}>Logout</div>
            </div>
}
            </span></i>
            <i class="fas fa-shopping-cart"><Link className="spann" style={{color : "inherit", textDecoration: 'none'}} to="/checkout">Cart</Link></i>
        </div>
    </div>


    </>
    )
}