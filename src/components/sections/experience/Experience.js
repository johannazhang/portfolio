import styles from "./Experience.module.scss";
import report_explanations from "../../../assets/images/report_explanations.png";
import iir from "../../../assets/images/iir.png";

const Experience = () => {
  return (
    <section className={styles.experience}>
      <h1>
        <span className="accent-blue">/</span>work
      </h1>
      <Scotiabank />
      <PocketHealth />
      <UofT />
    </section>
  );
};

const Scotiabank = () => {
  return (
    <div>
      <header>
        <h2>Scotiabank</h2>
        <span>Software Engineer, 2026-present</span>
      </header>
      <p>
        Enhancing banking activation and authentication flows at Scotia,
        building React applications and backend-for-frontend services for web
        and mobile clients.
      </p>
    </div>
  );
};

const PocketHealth = () => {
  return (
    <div>
      <header>
        <h2>PocketHealth</h2>
        <span>Software Engineer, 2024-2026</span>
      </header>
      <p>
        <i>
          A platform that enables patients and hospitals to access their medical
          imaging results.
        </i>
      </p>
      <br />
      <p>
        As a frontend-leaning engineer on the patient AI team, I implemented
        features within the medical exam viewer and health records section for
        the patient-facing app. I also worked on backend microservices and
        supported LLM evaluation processes. The tech stack consisted of Angular,
        Go, and Python. My favourite features I owned on the frontend were{" "}
        <strong>report explanations</strong>, a UI to display AI-generated
        explanations of radiology reports, and{" "}
        <strong>interactive image reader</strong>, an interactive visualization
        of patients' imaging for organ-level exploration.{" "}
      </p>
      <br />
      <details>
        <summary>Report explanations</summary>
        <img src={report_explanations}></img>
      </details>
      <details>
        <summary>Interactive image reader</summary>
        <img src={iir}></img>
      </details>
    </div>
  );
};

const UofT = () => {
  return (
    <div>
      <header>
        <h2>University of Toronto</h2>
        <span>Designer/Misc, 2019-2024</span>
      </header>
      <p>
        During my CS studies, I dabbled in a variety of design jobs since I
        always loved the creative side of technology. I designed some branding
        solutions for clients with my team at <strong>UDesign</strong>. I also
        worked for the university newspaper, <strong>The Varsity</strong>, and
        put together layouts for their weekly issues. In my last year, I spent a
        lot of time as the graphic designer for <strong>Hatchery</strong>,
        creating social media and marketing assets (as well as shooting videos
        and interviewing students!).
      </p>
    </div>
  );
};

export default Experience;
