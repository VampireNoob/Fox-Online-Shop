import { useSelector } from "react-redux";
import dataGames from "../../data/dataGames";
import Game from "./Game";
import { getSelectedCategory } from "../../redux/gamesSlice";

const Games = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>
            {dataGames
            .filter(game => {
                if (selectedCategory === 'Alles') return true;
                return selectedCategory === game.category;
            })
            .map(game => <Game game={ game } key={ game.id } />)}
        </div>
    )
}

export default Games;