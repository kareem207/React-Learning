import TripCard from "./components/TripCard";
import Navbar from "./components/Navbar";
import data from "./data";

function App(props) {
    const TripCardElements = data.map( function (data) {
        return (
            <TripCard
            title= {data.title}
            location= {data.location}
            googleMapsUrl= {data.googleMapsUrl}
            startDate= {data.startDate}
            endDate= {data.endDate}
            description= {data.description}
            imageUrl= {data.imageUrl}
            />
        )
    })

    return (
        <div>
            <Navbar />
            {TripCardElements}

        </div>
    );
}

export default App;