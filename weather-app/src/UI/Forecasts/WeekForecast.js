import "./WeekForecast.css";

const WeekForecast= (props) => {
    return (
        <div className="WeekForecast">
            <h2>THE WEEKLY WEATHER FORKAST DATA IS RENDERED HERE!</h2>
            <div>
                <p>Thuesday</p>
                <p>29&deg;</p>
                <p>Wind</p>
                <p>Humidity</p>
            </div>
            <div>
                <p>Wednesday</p>
                <p>31&deg;</p>
                <p>Wind</p>
                <p>Humidity</p>
            </div>
            <div>
                <p>Thursday</p>
                <p>31&deg;</p>
                <p>Wind</p>
                <p>Humidity</p>
            </div>
        </div>
    )
}

export default WeekForecast;