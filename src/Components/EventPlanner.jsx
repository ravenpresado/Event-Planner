import React from 'react';
import './EventPlanner.css';

function EventPlanner() {
  return (
    <div className="event-planner-container">

      {/* Header */}
      <header>
        <h1>Welcome to Event Planner</h1>
      </header>

      {/* Description */}
      <section className="description">
        <p>
          Event Planner helps you organize and manage personal and corporate
          events easily and successfully.
        </p>

        <button
          className="get-started-button"
          onClick={() => alert("Let's start planning your event!")}
        >
          Get Started
        </button>
      </section>

      {/* Event Categories */}
      <section className="events_categories">

        <ul>
          <h1>Personal Events</h1>
          <li>Birthday Parties</li>
          <li>Weddings</li>
          <li>Anniversaries</li>
          <li>Graduation Parties</li>
        </ul>

        <ul>
          <h1>Corporate Events</h1>
          <li>Meetings</li>
          <li>Conferences</li>
          <li>Team Building</li>
          <li>Company Parties</li>
        </ul>

        <ul>
          <h1>Social Events</h1>
          <li>Graduation Parties</li>
          <li>Reunions</li>
          <li>Celebrations</li>
        </ul>

      </section>

      {/* Features */}
      <section className="features">
        <h1>Our Features</h1>

        <ul>
          <li>Easy Event Planning</li>
          <li>Event Scheduling</li>
          <li>Guest Management</li>
          <li>Event Organization</li>
          <li>Contact and Support</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h1>Testimonials</h1>

        <div>
          <h2>Maria</h2>
          <p>
            Event Planner made organizing my birthday party simple and easy.
          </p>
        </div>

        <div>
          <h2>John</h2>
          <p>
            The service helped us organize our company event successfully.
          </p>
        </div>

        <div>
          <h2>Anna</h2>
          <p>
            I enjoyed using Event Planner because everything was well organized.
          </p>
        </div>
      </section>

     {/* Contact */}
<section className="contact">
  <h2>Contact Us</h2>

  <form
    onSubmit={(e) => {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
    }}
  >
    <input
      type="text"
      placeholder="Your Name"
    />

    <input
      type="email"
      placeholder="Your Email"
    />

    <input
      type="text"
      placeholder="Your Message"
    />

    <button type="submit" className="submit-button">
      Submit
    </button>
  </form>
</section>
    </div>
  );
}

export default EventPlanner;