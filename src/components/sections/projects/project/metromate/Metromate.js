import HighlightText from "../../../../shared/HighlightText";
import styles from "./Metromate.module.scss";
import process from "../../../../../assets/images/metromate_process.png";
import sketches from "../../../../../assets/images/metromate_sketches.png";
import home from "../../../../../assets/images/metromate_home.png";
import transit from "../../../../../assets/images/metromate_transit.png";
import station from "../../../../../assets/images/metromate_station.png";
import route from "../../../../../assets/images/metromate_route.png";
import final from "../../../../../assets/images/metromate_final.png";
import ButtonLink from "../../../../shared/Button";

const Metromate = () => {
  const summary =
    "Metromate provides access to updated and relevant information on public transit and pedestrian mobility in a city, simplifying urban navigation.";

  return (
    <div className={styles.metromate}>
      <p>
        <strong>Team:</strong> Emaan, Jeanine, Ray, Raymond
      </p>
      <p>
        <strong>Timeline:</strong> 1 month
      </p>
      <br />
      <HighlightText text={summary} colour="#c2e3ff" />

      <h2 className="project-subtitle">Problem</h2>
      <p>
        Our problem space focuses on the lack of helpful information for
        newcomers who are trying to navigate a city by public transportation and
        walking.
      </p>
      <br />
      <p>
        Existing navigation apps are <strong>too cluttered</strong> and{" "}
        <strong>lack transit and pedestrian details</strong> for{" "}
        <strong>newcomers</strong> to get around .
      </p>
      <br />
      <p>
        <strong>
          How might we provide easily accessible information on public transit
          options and walking conditions for newcomers in a city?
        </strong>
      </p>
      <img
        className={styles.process}
        src={process}
        alt="user research process"
      />

      <h2 className="project-subtitle">Research</h2>
      <h3>Methods</h3>
      <p>
        Questionnaires and interviews were done on user’s experiences with
        transit and public spaces. Observation studies were conducted on
        Toronto’s TTC Stations to better understand users’ behaviours navigating
        transit.
      </p>
      <br />
      <p>
        <strong>
          <i>Only 53.3% of users felt informed</i>
        </strong>
        <i>
          &nbsp;of updates to transit service, out-of-service escalators,
          out-of-service doors, trains, and threats to safety.
        </i>
      </p>
      <br />
      <p>
        <i>
          "I struggle with navigating the Toronto transit system, I always get
          lost trying to find the different exits and ticket machines."
        </i>
      </p>
      <h3>Narrowing the focus</h3>
      <p>
        We discovered that the most significant problem was{" "}
        <strong>access</strong> with regards to three areas ➔{" "}
        <strong>cost</strong>, <strong>infrastructure</strong>, and{" "}
        <strong>information</strong>
      </p>
      <h3>Competitive Analysis on Google Maps</h3>
      <p>
        Google Maps comprises of general map information and contains an
        extensive range of features on navigation and points of interest. This
        is valuable but due to its comprehensive nature, it is challenging to
        find details on transit, footpath quality, construction and safety. It
        can therefore feel unfocused and busy, leaving a gap in the market for a
        more succinct solution targeting newcomers.{" "}
      </p>
      <h3>System Goals</h3>
      <ul className="bullet-list">
        <li>Display navigation instructions</li>
        <li>Show transit route and station details</li>
        <li>Access useful public transit and pedestrian information</li>
        <li>View mobility-related alerts</li>
      </ul>

      <h2 className="project-subtitle">Sketches</h2>
      <img src={sketches} alt="app sketches" />

      <h2 className="project-subtitle">High-Fidelity Prototype</h2>
      <h4>Home Page and Alerts Map Layer</h4>
      <details open>
        <summary>
          Easily access information on transit and alerts through its home page
        </summary>
        <img
          className={styles.hifi}
          src={home}
          alt="screens of the home page"
        />
      </details>
      <h4>Transit Guide and Ticket Info</h4>
      <details open>
        <summary>
          Get summarized information on the transit system of a city
        </summary>
        <img
          className={styles.hifi}
          src={transit}
          alt="screens of the transit guide"
        />
      </details>
      <h4>Station Details</h4>
      <details open>
        <summary>
          View metro and bus schedules and details on specific stations
        </summary>
        <img
          className={styles.hifi}
          src={station}
          alt="screens of the station info"
        />
      </details>
      <h4>Route Details</h4>
      <details open>
        <summary>
          Search for a destination and get directions on how to navigate there
        </summary>
        <img className={styles.hifi} src={route} alt="screens of the map" />
      </details>

      <h2 className="project-subtitle">Testing</h2>
      <h3>Usability Tests</h3>
      <p>
        We tested our prototype on 7 participants primarily in the age range of
        19-24 who have previously used existing navigation maps. They were given
        a curated set of tasks to explore all the features our prototype had to
        offer.
      </p>
      <h3>Findings</h3>
      <p>
        Generally, participants found that Metromate would be helpful for
        first-time users and newcomers in a city. Participants appreciated the
        transit guide, but raised the feedback that having ticket information
        would be useful. The alerts button was not super prominent and the
        wording of certain alert messages caused some confusion. Users also
        found that the station map lacked the information they were expecting.
        Through our tests, we were able to iterate on the clarity and
        functionality of our features.
      </p>

      <h2 className="project-subtitle">The final design</h2>
      <img src={final} alt="metromate UI screens" />
      <div className="button-link">
        <ButtonLink
          label="View Prototype"
          colour="#c2e3ff"
          link="https://www.figma.com/proto/71hYlP7XKBPMFNKB8NVRJR/Metromate?type=design&node-id=1-8&t=KU7PZyLxxFng0DGz-1&scaling=scale-down&page-id=1%3A2&starting-point-node-id=1%3A8&mode=design"
        />
      </div>

      <h2 className="project-subtitle">Reflections</h2>
      <p>
        Metromate was a rewarding and fruitful experience with many iterations.
        User research (both prior and during the design phase) was crucial in
        determining what problems we wanted to solve. We made revisions at each
        stage of the process, from ideation to creation, which really helped us
        get to the end result.{" "}
      </p>
      <br />
      <p>
        There are still many areas we would’ve liked to address with more time
        and resources. The station map in our app is elementary and could use
        more research and testing, as this is not a commonly seen feature.
        Iterating on the structure and copy for the transit guide and ticket
        information could make those pages more effective. We would’ve also
        liked to play more with the branding of our app to make it more fun and
        enjoyable to use.
      </p>
    </div>
  );
};

export default Metromate;
