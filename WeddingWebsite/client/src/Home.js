import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome!</h1>
        <nav>
          <Link to="/rsvp">
            <button class="button button2" title="View RSVP details">RSVP</button>
          </Link>
          <Link to="/venue-details">
            <button class="button button1" title="View the venue details">Venue Details</button>
          </Link>
          <Link to="/pictures">
            <button class="button button1" title="View the pictures from the event">Pictures</button>
          </Link>
          <Link to="/background">
            <button class="button button1" title="Read up on the background of Brianna and Owen!">Background</button>
          </Link>
          <Link to="/schedule">
            <button class="button button1" title="View the event schedule">Schedule</button>
          </Link>
          <Link to="/help">
            <button class="button button2" title="Click for help">Help</button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Home;