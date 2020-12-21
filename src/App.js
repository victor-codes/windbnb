import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState } from "react";

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num).concat("...") : str;
}

function App(props) {
  const [searchBar, setSearchBar] = useState(false);
  const [country, setCountry] = useState("Helsinki, Finland");
  const [countAdult, setCountAdult] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [filterCity, setFilterCity] = useState("All");
  const [guestNumber, setGuestNumber] = useState("Add guest");

  const property = props.property;
  const propertyList = property
    .filter((prop) => {
      return filterCity === "All" && guestNumber === "Add guest"
        ? prop
        : prop.city === filterCity && prop.maxGuests >= guestNumber;
    })
    .map((data) => (
      <Card
        photoUrl={data.photo}
        title={truncateString(data.title, 36)}
        country={data.country}
        city={data.city}
        rating={data.rating}
        maxGuests={data.maxGuests}
        type={data.type}
        beds={data.beds}
        superHost={data.superHost}
      />
    ));
  const propertyLength =
    propertyList.length > 3
      ? `${propertyList.length - 2}+`
      : propertyList.length;
  const properNoun = { propertyLength } < 2 ? ` stay` : `stays`;
  const propertyNoun = `${propertyLength} ${properNoun}`;

  return (
    <div className="App">
      <SearchBar
        handleGuestNumberChange={(val) => setGuestNumber(val)}
        change={(val) => setFilterCity(val)}

        guestNumberAdult={countAdult}
        setCountAdult={(value) => setCountAdult(value)}

        guestNumberChildren={countChildren}
        setCountChildren={(value) => setCountChildren(value)}
        
        countryName={country}
        setCountry={(value) => setCountry(value)}
        toggleShow={searchBar}
        click={(value) => setSearchBar(value)}
      />
      <Nav
        countryName={country}
        click={(value) => setSearchBar(value)}
        guestNumberAdult={countAdult}
      />
      <main className="main">
        <Header numberOfProperty={propertyNoun} />
        <div className="card__container">{propertyList}</div>
      </main>
    </div>
  );
}

export default App;
