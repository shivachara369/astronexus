import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
const NASA_API_KEY = "JgfAZ1WXOntq352i9JlxKmrcftycikimTYbXiEdh";


const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
};

const getEndDate = (days) => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate.toISOString().split("T")[0];
};

const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
const EPIC_API_URL =`https://api.nasa.gov/EPIC/api/natural/date/${getCurrentDate()}?api_key=${NASA_API_KEY}`;

const MARS_API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}`;
const SPACE_WEATHER_API_URL = "https://services.swpc.noaa.gov/json/solar-cycle-observed.json";

const NEO_API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${getCurrentDate()}&end_date=${getEndDate(5)}&api_key=${NASA_API_KEY}`;

const demoEvents = [
  {
    name: "Mars Colonization Conference",
    date: "March 25, 2025",
    description: "An in-depth discussion on the future of Mars colonization, featuring experts from NASA, SpaceX, and ESA.",
    registerLink: "#",
    image: "https://media.istockphoto.com/id/864984192/photo/mars-colony-expedition-on-alien-planet-life-on-mars-3d-illustration.jpg?s=612x612&w=0&k=20&c=77CdODJqs9uv_zrJ8fR2CTGlwGGU0kjSPDCuT_YKYi0=",
  },
  {
    name: "Lunar Exploration Summit",
    date: "April 12, 2025",
    description: "Exploring the latest advancements in lunar technology, including Artemis program updates.",
    registerLink: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdWte2Hf4hsCKf-ibuwqZHdwKANDbJXJ7CA&s",
  },
  {
    name: "Astrobiology & Exoplanets Symposium",
    date: "May 18, 2025",
    description: "A scientific discussion on the search for extraterrestrial life and habitable exoplanets.",
    registerLink: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9wNt-lBhlWN6Ncxd2DaSnNXM_BMAnkFPkDA&s",
  },
];

const articles = [
  {
    title: "NASA's Latest Mars Mission",
    link: "https://www.nasa.gov/mars",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/PIA24838-NASA-MarsMissions-20210928.jpg/500px-PIA24838-NASA-MarsMissions-20210928.jpg",
  },
  {
    title: "ESA's Space Exploration Plans",
    link: "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQih-kY1KFmj6ddtzeaw4fXz9_bNnXUvuJWw&s",
  },
  {
    title: "SpaceX Starship Updates",
    link: "https://www.spacex.com/vehicles/starship/",
    image: "https://i.ytimg.com/vi/MeEiolvg_q8/maxresdefault.jpg",
  },
];

const services = [
  {
    title: "NEO Tracker",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQca4-yghSGdo2FSqazeTKgQ4zM2o9en9pAtw&s",
    link: "https://cneos.jpl.nasa.gov/",
  },
  {
    title: "Exoplanet Discoveries",
    image: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/1-5000-exoplanets-lead-JPL.jpg",
    link: "https://exoplanets.nasa.gov/",
  },
  {
    title: "Planetary Insights",
    image: "https://static.toiimg.com/thumb/msid-115596362,width-1280,height-720,imgsize-73194,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    link: "https://solarsystem.nasa.gov/",
  },
  {
    title: "Space Weather",
    image: "https://sdo.gsfc.nasa.gov/assets/img/latest/latest_1024_HMIIF.jpg",
    link: "https://www.swpc.noaa.gov/",
  },
  {
    title: "Humans in Space",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUeoTUJXtW_U2XVtcQhPl9vOyUm9awTWj1Q&s",
    link: "https://www.nasa.gov/humans-in-space",
  },
  {
    title: "Science News",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWCLADvp6DU3_mMUzZo5DAEUAU1tq6j-PxQ&s",
    link: "https://science.nasa.gov/",
  },
  {
    title: "Climate Change",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPl_oYRyTb3E0dYxnifUt0IwlEz__INDO2Ng&s",
    link: "https://climate.nasa.gov/",
  },
  {
    title: "Missions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9MO5mHzxQppNz-Ns83-F_Ch7Ne9ee-ZfPg&s",
    link: "https://www.nasa.gov/missions",
  },
];

function Home()
{
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/");
    }
  }, []);

  const [photo, setPhoto] = useState(null);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [epicImage, setEpicImage] = useState(null);
  const [marsImage, setMarsImage] = useState(null);
  const [spaceWeather, setSpaceWeather] = useState(null);
  const [neoData, setNeoData] = useState(null);
  const [article, setArticle] = useState({ title: "", content: "", url: "" });



  useEffect(() => {
    axios
      .get(NASA_APOD_URL)
      .then((response) => setPhoto(response.data))
      .catch((error) => console.error("Error fetching NASA APOD:", error));
  }, []);

  useEffect(() => {
    axios
      .get(EPIC_API_URL)
      .then((response) => {
        if (response.data.length > 0) {
          const latest = response.data[0];
          setEpicImage(`https://epic.gsfc.nasa.gov/archive/natural/${latest.date.replaceAll("-", "/")}/png/${latest.image}.png`);
        }
      })
      .catch((error) => console.error("Error fetching EPIC image:", error));

    axios
      .get(MARS_API_URL)
      .then((response) => {
        if (response.data.photos.length > 0) {
          setMarsImage(response.data.photos[0].img_src);
        }
      })
      .catch((error) => console.error("Error fetching Mars photos:", error));

    axios
      .get(SPACE_WEATHER_API_URL)
      .then((response) => {
        if (response.data.length > 0) {
          setSpaceWeather(response.data[response.data.length - 1]); // Latest space weather
        }
      })
      .catch((error) => console.error("Error fetching Space Weather data:", error));

    axios
      .get(NEO_API_URL)
      .then((response) => {
        const neos = Object.values(response.data.near_earth_objects).flat();
        if (neos.length > 0) {
          setNeoData(neos[0]); // Get first NEO object
        }
      })
      .catch((error) => console.error("Error fetching NEO data:", error));
  }, []);

  const handlePrev = () => {
    setCurrentEvent((prev) => (prev === 0 ? demoEvents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentEvent((prev) => (prev === demoEvents.length - 1 ? 0 : prev + 1));
  };

  const handleSaveArticle = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/articles/save",
        article,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      alert("Article saved successfully!");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Discover Space */}
      <main className="p-6 text-center">
        <h2 className="text-[8rem] font-bold uppercase mt-4 border-b-4 border-gray-700 pb-4">
          Discover Space
        </h2>
      </main>

      {/* NASA Photo of the Day */}
      <section className="flex flex-col items-center mt-10">
        {photo && (
          <div className="p-4 bg-gray-900 border-2 border-gray-700 rounded-lg shadow-lg w-3/4">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-3/4 mx-auto rounded-lg border-4 border-gray-500 shadow-lg"
            />
            <p className="mt-4 text-2xl text-gray-300 font-semibold">
              NASA Photo of the Day
            </p>
            <p className="mt-2 text-gray-400">{photo.title}</p>
          </div>
        )}
      </section>

      {/* Space Events Section */}
      <section className="mt-20 ml-16">
        <h2 className="text-[6rem] font-bold uppercase border-b-4 border-gray-700 pb-4 w-max">
          SPACE EVENTS
        </h2>

        <div className="relative flex items-center justify-center mt-10">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
          >
            ◀
          </button>

          <div className="flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg max-w-5xl">
            <div className="max-w-lg p-4">
              <h3 className="text-4xl font-semibold mb-3">
                {demoEvents[currentEvent].name}
              </h3>
              <p className="text-xl text-gray-400">
                {demoEvents[currentEvent].date}
              </p>
              <p className="mt-2 text-gray-300">
                {demoEvents[currentEvent].description}
              </p>
              <a
                href={demoEvents[currentEvent].registerLink}
                className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-500"
              >
                Register Now
              </a>
            </div>

            <div className="mt-6 md:mt-0">
              <img
                src={demoEvents[currentEvent].image}
                alt="Event Poster"
                className="w-80 rounded-lg border-4 border-gray-500 shadow-lg"
              />
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Articles Section */}
      <section className="mt-20 ml-16">
        <h2 className="text-[6rem] font-bold uppercase border-b-4 border-gray-700 pb-4 w-max">
          ARTICLES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-lg hover:bg-gray-800 transition flex flex-col items-center text-center"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover rounded-lg mb-4 border-2 border-gray-600"
              />
              <h3 className="text-3xl font-semibold">{article.title}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* Space Today Section */}
      <section className="my-10 p-6">
        <h2 className="text-[6rem] font-bold uppercase border-b-4 border-gray-700 pb-4 w-max">Space Today</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* EPIC Card */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Earth from Space</h3>
            {epicImage ? <img src={epicImage} alt="EPIC Earth" className="w-full h-40 object-cover rounded" /> : <p>Loading...</p>}
            <p className="mt-2">Latest EPIC Image</p>
          </div>

          {/* Mars Rover Card */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mars Rover</h3>
            {marsImage ? <img src={marsImage} alt="Mars Rover" className="w-full h-40 object-cover rounded" /> : <p>Loading...</p>}
            <p className="mt-2">Curiosity Rover's Latest Photo</p>
          </div>

          {/* Space Weather Card */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Space Weather</h3>
            {spaceWeather ? (
              <p className="mt-2">Sunspot Number: {spaceWeather.ss_number}</p>
            ) : (
              <p>Loading...</p>
            )}
            <p className="mt-2">Latest Solar Cycle Data</p>
          </div>

          {/* Near-Earth Object Card */}
          <div className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Near-Earth Object</h3>
            {neoData ? (
              <p className="mt-2">{neoData.name} - {neoData.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}m</p>
            ) : (
              <p>Loading...</p>
            )}
            <p className="mt-2">Latest NEO Information</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-20 ml-16">
        <h2 className="text-[6rem] font-bold uppercase border-b-4 border-gray-700 pb-4 w-max">
          SERVICES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-lg overflow-hidden border border-gray-700 shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center p-2 text-xl font-semibold">
                {service.title}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Save Article Section */}
      <section className="mt-20 ml-16">
        <h2 className="text-[5rem] font-bold uppercase pb-4 w-max">
          SAVE ARTICLE
        </h2>

        <div className="mt-10">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
          />
          <input
            type="text"
            placeholder="Content"
            onChange={(e) => setArticle({ ...article, content: e.target.value })}
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
          />
          <input
            type="text"
            placeholder="URL"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            className="w-full p-2 mb-4 bg-gray-800 text-white rounded-lg"
          />
          <button
            onClick={handleSaveArticle}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-500"
          >
            Save Article
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;