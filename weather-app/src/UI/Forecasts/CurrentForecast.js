import "./CurrentForecast.css";

const CurrentForecast = (props) => {
    return (
        <div className="CurrentForecast">
            <h2>CITY</h2>
            <p>28&deg;</p>
            <p>Feels Like</p>
            <p>Humidity</p>
            <p>Wind</p>

            <div>
                <p>Hourly Forecast for the day</p>
                <p>11:00</p>
                <p>12:00</p>
                <p>13:00</p>
                <p>14:00</p>
                <p>15:00</p>
            </div>
        </div>
    )
}

export default CurrentForecast;