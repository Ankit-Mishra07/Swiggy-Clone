import style from "../Styles/Navbar.module.css";

export const Navbar = () => {
    return <div className={style.navbar}>
        <div className={style.left}>
            <img src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"/>
            <p><u>Work</u></p>
            <i className="fas fa-angle-down"></i>
        </div>
        <div className={style.right}>
            <i className="fas fa-search"><span>Search</span></i>
            <i class="fas fa-percentage"><span>Offers</span></i>
            <i class="far fa-life-ring"><span>Help</span></i>
            <i class="fas fa-user"><span>Sign In</span></i>
            <i class="fas fa-shopping-cart"><span>Cart</span></i>
        </div>
    </div>
}