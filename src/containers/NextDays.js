function NextDays({forecast}) {

    return(
        <div>
            { forecast.map( item => (
                <div>
                    {item.weather[0].main}
                    {item.feels_like.day}
                </div>
            ))}
        </div>
    )
}

export default NextDays;