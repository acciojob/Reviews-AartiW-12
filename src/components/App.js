import React from "react";
import "./../styles/App.css";
import Reviews from "./Reviews";

const App = () => {
  return (
    <main>
        <section className="container" >
            <h2 id="review-heading">Our Reviews</h2>
            <Reviews />
        </section>
    </main>
    
  );
};

export default App;