import React from "react";
import "./../styles/App.css";
import Reviews from "./Reviews";

const App = () => {
  return (
    <main>
        <section class="container" id="review-heading">
            <h2 id="review-heading">Our Reviews</h2>
            <Reviews />
        </section>
    </main>
    
  );
};

export default App;