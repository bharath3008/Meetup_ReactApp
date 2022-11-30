import { useContext } from "react";
import FavoritesContext from "../components/store/Favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if(favoritesCtx.totalFavorites === 0){
    content = <h3>You got no favorites wanna add some?</h3>;
  }else{
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
