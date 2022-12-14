import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../store/Favorites-context";
import classes from './MainNavigation.module.css';
function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>AllMeetups</Link>
                </li>
                <li>
                    <Link to='/new-meetups'>NewMeetups</Link>
                </li>
                <li>
                    <Link to='/favo'>Favorites
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;