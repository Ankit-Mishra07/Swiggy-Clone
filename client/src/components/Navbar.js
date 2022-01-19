import style from "../Styles/Navbar.module.css";

export const Navbar = () => {
    return <div className={style.navbar}>
        <div className={style.left}>
            <img src="https://logosandtypes.com/wp-content/uploads/2021/01/Swiggy.png"/>
            <p><u>Work</u></p>
            <i className="fas fa-angle-down"></i>
        </div>
        <div className={style.right}>
            <i className="fas fa-search"><span className="spann">Search</span></i>
            <i class="fas fa-percentage"><span className="spann">Offers</span></i>
            <i class="far fa-life-ring"><span className="spann">Help</span></i>
            <i class="fas fa-user"><span className="spann">Sign In</span></i>
            <i class="fas fa-shopping-cart"><span className="spann">Cart</span></i>
        </div>
    </div>
}