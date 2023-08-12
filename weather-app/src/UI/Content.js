import "./Content.css";
import CurrentForecast from "./Forecasts/CurrentForecast";
import WeekForecast from "./Forecasts/WeekForecast";
import Search from "./Search/Search";

const Content = () => {
    return (
        <div className="Content">
            <Search />
            <CurrentForecast />
            <WeekForecast />
        </div>
    )
}

export default Content;