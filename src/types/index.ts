export type optionType = {
    name: string
    country: string
    lat: number
    lon: number
}

export type forecastType = {
    name: string
    country: string
    sunrise: number
    sunset: number
    list: [
        {
            dt: number
            main: {
                feels_like: number
                temp: number
                temp_min: number
                temp_max: number
                pressure: number
                humidity: number
            }
            weather: [
                {
                    main: string
                    description: string
                    icon: string
                }
            ]
            clouds: {
                all: number
            }
            wind: {
                speed: number
                gust: number
                deg: number
            }
            visibility: number
            pop: number
        }
    ]
}
