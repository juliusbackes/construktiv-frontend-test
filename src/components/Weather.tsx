import { CardBody, CardContainer, CardItem } from "./";
import { BASE_URL, API_KEY } from "./env";
import { useState } from "react";

export default function Weather() {
    const city = localStorage.getItem('city');

    const [weather, setWeather] = useState<any>(null);

    const getWeather = async () => {
        const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}&lang=de`);
        const data = await response.json();
        setWeather(data);
    }
    
    setInterval(() => {
        getWeather();
    }, 3000);


  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Das Wetter in {city} ist
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {weather?.current?.condition.text}
              </CardItem>
              <CardItem
          translateZ="50"
          className="text-2xl font-bold text-neutral-600 dark:text-white"
        >
          {weather?.current?.temp_c}°C
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
