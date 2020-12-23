import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const PROPERTY = [
  {
    all: "All",
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Stylist apartment in center of the city",
    rating: 4.4,
    maxGuests: 3,
    type: "Entire apartment",
    beds: 2,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641445/Windbnb/photo-1.webp",
  },
  {
    all: "All",
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Nice apartment in center of Helsinki",
    rating: 4.2,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641500/Windbnb/photo-2.webp",
  },
  {
    all: "All",
    city: "Helsinki",
    country: "Finland",
    superHost: true,
    title: "Arty interior in 1900 wooden house",
    rating: 4.5,
    maxGuests: 10,
    type: "Entire house",
    beds: 6,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641524/Windbnb/photo-3.webp",
  },
  {
    all: "All",
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Apartment next to market spuare",
    rating: 4.48,
    maxGuests: 3,
    type: "Entire apartment",
    beds: null,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641546/Windbnb/photo-4.webp",
  },
  {
    all: "All",
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Villa Aurora guest-house",
    rating: 4.75,
    maxGuests: 9,
    type: "Entire house",
    beds: null,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641575/Windbnb/photo-5.webp",
  },
  {
    all: "All",
    city: "Vaasa",
    country: "Finland",
    superHost: true,
    title: "A cosy family house",
    rating: 4.95,
    maxGuests: 6,
    type: "Entire house",
    beds: null,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641617/Windbnb/photo-6.webp",
  },
  {
    all: "All",
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Lovely Studio near Railway Station",
    rating: 4.68,
    maxGuests: 2,
    type: "Private room",
    beds: null,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641636/Windbnb/photo-7.webp",
  },
  {
    all: "All",
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Peaceful little home in city center",
    rating: 4.12,
    maxGuests: 6,
    type: "Entire house",
    beds: 3,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641661/Windbnb/photo-8.webp",
  },
  {
    all: "All",
    city: "Oulu",
    country: "Finland",
    superHost: false,
    title: "Beautiful new studio apartment nearby the center",
    rating: 4.49,
    maxGuests: 2,
    type: "Entire apartment",
    beds: 1,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641677/Windbnb/photo-9.webp",
  },
  {
    all: "All",
    city: "Oulu",
    country: "Finland",
    superHost: true,
    title: "Cozy woodhouse flat with wooden sauna",
    rating: 4.38,
    maxGuests: 4,
    type: "Entire house",
    beds: null,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641699/Windbnb/photo-10.webp",
  },
  {
    all: "All",
    city: "Vaasa",
    country: "Finland",
    superHost: false,
    title: "Brand new studio apartment near the harbour",
    rating: 4.89,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641734/Windbnb/photo-11.webp",
  },
  {
    all: "All",
    city: "Helsinki",
    country: "Finland",
    superHost: false,
    title: "Beautiful and comfortable old wooden house",
    rating: 4.63,
    maxGuests: 10,
    type: "Entire house",
    beds: null,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641758/Windbnb/photo-12.webp",
  },
  {
    all: "All",
    city: "Turku",
    country: "Finland",
    superHost: false,
    title: "Turku Nordic Home near city center",
    rating: 4.24,
    maxGuests: 5,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641778/Windbnb/photo-13.webp",
  },
  {
    all: "All",
    city: "Turku",
    country: "Finland",
    superHost: true,
    title: "Nice 2 room apartment close to everything",
    rating: 4.34,
    maxGuests: 6,
    type: "Entire apartment",
    beds: 3,
    photo:
      "https://res.cloudinary.com/victorcodes/image/upload/c_fill,q_auto:best,w_600/v1608641793/Windbnb/photo-14.webp",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App property={PROPERTY} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
