import { useSelector } from "react-redux";
import style from "../Styles/Navbar.module.css";

export const Navbar = () => {

   const {userData} = useSelector(state => state.userState)
   
    
    return <div className={style.navbar}>
        <div className={style.left}>
            <img src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"/>
            <p><u>{userData[0].location}</u></p>
            <i className="fas fa-angle-down"></i>
        </div>
        <div className={style.right}>
            <i className="fas fa-search"><span className="spann">Search</span></i>
            <i class="fas fa-percentage"><span className="spann">Offers</span></i>
            <i class="far fa-life-ring"><span className="spann">Help</span></i>
            <i class="fas fa-user"><span className="spann">{userData[0].name}</span></i>
            <i class="fas fa-shopping-cart"><span className="spann">Cart</span></i>
        </div>
    </div>
}