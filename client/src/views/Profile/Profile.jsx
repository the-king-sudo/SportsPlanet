import React from "react";
import style from "./Profile.module.css";
import { NavBar } from "../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "./ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaDollarSign,
  FaHeart,
  FaQuestionCircle,
  FaUserCircle,
  FaStore,
  FaEdit,
} from "react-icons/fa";

export const Profile = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  const filteredProducts = products.filter((product) => product.price >= 25);
  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.userPanel}>
        <div className={style.filterPanel}>
          <Link to="/profile">
            <div className={style.filter}>
              <FaUserCircle />
              <h3 className={style.myShopping}>MY PROFILE</h3>
            </div>
          </Link>

          <Link to="/profile/myproducts">
            <div className={style.filter}>
              <FaStore />
              <h3 className={style.myShopping}>MY PRODUCTS</h3>
            </div>
          </Link>

          <Link to="/profile/shopping">
            <div className={style.filter}>
              <FaShoppingBag />
              <h3 className={style.myShopping}>MY SHOPPING</h3>
            </div>
          </Link>

          <Link to="/profile/sales">
            <div className={style.filter}>
              <FaDollarSign />
              <h3 className={style.mySales}>MY SALES</h3>
            </div>
          </Link>

          <Link to="/profile/favorites">
            <div className={style.filter}>
              <FaHeart />
              <h3 className={style.myFavorites}>FAVORITE PRODUCTS</h3>
            </div>
          </Link>

          <Link to="/help">
            <div className={style.filter}>
              <FaQuestionCircle />
              <h3 className={style.help}>HELP</h3>
            </div>
          </Link>
        </div>
        <div className={style.profilePanel}>
          <h2 className={style.profilePanelTitle}>YOUR PROFILE</h2>
          <div className={style.profileContainer}>
            <ProfileCard />
            <div className={style.profileDescription}>USER DESCRIPTION</div>
          </div>
        </div>
      </div>
    </div>
  );
};
