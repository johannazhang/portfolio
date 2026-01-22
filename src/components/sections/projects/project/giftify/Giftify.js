import HighlightText from "../../../../shared/HighlightText";
import styles from "./Giftify.module.scss";
import experience from "../../../../../assets/images/giftify_experience.png";
import jobStory from "../../../../../assets/images/giftify_job_story.png";
import final from "../../../../../assets/images/giftify_final.png";
import hifi from "../../../../../assets/images/giftify_hifi.png";
import ButtonLink from "../../../../shared/Button";
import ColorCodedText from "./ColorCodedText";

const Giftify = () => {
  const summary =
    "Giftify is an app that aims to make the gift-giving process easier and more efficient for the giver, in order to increase gift satisfaction for the receiver.";

  return (
    <div className={styles.giftify}>
      <p>
        <strong>Team:</strong> Angelina, Joyce, Ryan, Steven, Syed
      </p>
      <p>
        <strong>Timeline:</strong> 9 weeks
      </p>
      <br />
      <HighlightText text={summary} colour="#e0e7ff" />

      <h2 className="project-subtitle">Problem</h2>
      <p>
        <strong>The Motivation -</strong> How can technology help with
        meaningful expressions of gratitude? Many people show gratitude by
        giving gifts to the people in their life. Gift givers want an easy and
        efficient way to give gifts that their recipient would appreciate.
      </p>
      <br />
      <p>
        <strong>Understanding the Problem -</strong> We conducted questionnaires
        and interviews to help us formulate our problem, targeting
        gift-givers/receivers with an emphasis on friends and families.
      </p>
      <br />
      <p>
        <strong>Research Findings -</strong> We received 66 responses to our
        questionnaire containing questions about respondents' gift-giving
        habits, challenges and the effect of gifts on their relationships. We
        also interviewed 5 participants to learn more about their experiences
        and processes with giving gifts.
      </p>
      <br />
      <p>
        We found that wishlists, gift idea articles/videos and friend
        suggestions were popular tools used to select gifts. Some participants
        do passive research, noting down ideas as they encounter them. Finding
        and giving gifts as a group was also mentioned. Common pain points
        discovered were not knowing what gifts to give, ensuring that gifts are
        within a budget, and finding gifts that are personalized and meaningful
        for the recipient.
      </p>

      <h2>Mapping the experience</h2>
      <img src={experience} alt="giftify experience map" />
      <p>
        We created an experience map to illustrate a user’s overall experience
        in giving a gift.
      </p>
      <h2 className="project-subtitle">Job stories</h2>
      <img
        className={styles.jobStory}
        src={jobStory}
        alt="job story template"
      />
      <p>
        To help us better understand and identify what challenges users are
        facing, we wrote job stories that detail the context, motivation and
        expected outcomes of users:
      </p>
      <ul>
        <li>
          <ColorCodedText
            textSnippets={[
              "When I see something in a store that someone I know may like,",
              "I need to write it down in a list,",
              "so I can consult the list when it’s time to get that person a gift.",
            ]}
          />
        </li>
        <li>
          <ColorCodedText
            textSnippets={[
              "When I am looking for gifts and feel stuck on what to give,",
              "I want to read articles and browse TikTok, Pinterest or Amazon,",
              "so I can find new ideas that I didn’t previously think about.",
            ]}
          />
        </li>
        <li>
          <ColorCodedText
            textSnippets={[
              "When I am brainstorming gift ideas for a friend/partner,",
              "I want to ask my friends and mutual friends for gift suggestions,",
              "so I can gain a better understanding of what my recipient would like and/or find useful.",
            ]}
          />
        </li>
        <li>
          <ColorCodedText
            textSnippets={[
              "When I am shopping for gifts for a friend’s birthday and have other friends who also want to give gifts to the same person,",
              "I want to be able to easily purchase a gift on behalf of the group,",
              "so we can give a more expensive gift than any one individual could afford.",
            ]}
          />
        </li>
      </ul>

      <h2 className="project-subtitle">Design requirements</h2>
      <p>
        Based on our research and studies, we determined five functional
        requirements that we would want to include in our product:
      </p>
      <ul className="bullet-list">
        <li>Direct users to a variety of possible gift ideas</li>
        <li>Save possible gift ideas for future reference</li>
        <li>Lead users to where the gift can be purchased</li>
        <li>Allow multiple individuals to collaborate on one gift</li>
        <li>Display the final price of the gift to the user</li>
      </ul>
      <h2 className="project-subtitle">Low-fidelity prototype</h2>
      <p>
        <strong>Evaluations -</strong> To evaluate our paper prototype, we
        conducted heuristic evaluations with 6 usability experts and
        think-alouds with 4 end-users.
      </p>
      <br />
      <p>
        <strong>Notable Results -</strong> We found that icons and indicators
        should be improved upon, as many participants relied on recognizing
        familiar icons to navigate our interface and felt that some of our icons
        did not accurately represent its functionality. The layout of the
        application could also be refined by grouping similar pages in more
        intuitive ways. Generally, participants were able to accomplish most of
        their tasks.
      </p>
      <br />
      <p>
        <strong>Further Research -</strong> Since our low-fidelity prototype
        included a feature where users can display their wishlist for friends to
        view, we received feedback regarding whether users would be willing to
        share their wishlist with others. We decided to conduct another
        questionnaire to determine users’ comfort with sharing wishlists and
        found that overall, users are comfortable letting others see their
        wishlist and suggesting gifts for their friends’ wishlists.
      </p>

      <h2 className="project-subtitle">High-fidelity prototype</h2>
      <img src={hifi} alt="high-fidelity screens of giftify" />
      <p>
        <strong>Evaluations -</strong> We did usability tests for our
        high-fidelity prototype with 5 participants by having them complete a
        set of tasks and then answer a questionnaire based on the System
        Usability Scale (SUS). The average SUS score calculated was 89.67. This
        represents an excellent SUS rating that lies in the acceptable range,
        based on common interpretations of SUS scores.
      </p>
      <br />
      <p>
        <strong>Notable Results -</strong> Participants tend to have some
        trouble navigating the application upon first use, but learned quickly
        and were comfortable afterwards. Refinements of the functionality and
        visuals should be made to ensure a smoother user experience. The general
        satisfaction with the product was high and most participants said they
        would use this application.
      </p>

      <h2 className="project-subtitle">The final design</h2>
      <img src={final} alt="giftify UI screens" />
      <p>
        Giftify contains four main pages - Home, Gifts, Friends and Wishlist,
        assisting users in finding, organizing, and giving gifts. Users can
        browse through a feed of gift ideas, view friends’ wishlists, suggest
        gifts for their friends, plan gifts individually or as a group, and
        update their own wishlist.
      </p>
      <div className="button-link">
        <ButtonLink
          label="View Prototype"
          colour="#e0e7ff"
          link="https://www.figma.com/proto/mZs0dHElCLt9Py1ZzEDuZb/Giftify?page-id=0%3A1&node-id=83%3A1366&viewport=241%2C48%2C0.16&scaling=scale-down&starting-point-node-id=83%3A1366&show-proto-sidebar=1"
        />
      </div>

      <h2 className="project-subtitle">Reflections</h2>
      <p>
        Creating Giftify was an insightful experience, as I learned a lot about
        the process of user-centered design. Conducting research through
        different methods was key in grasping the problem from the user
        perspective. Involving user feedback after each iteration of our
        solution helped us avoid assumptions and keep the user's needs in mind
        throughout.
      </p>
      <br />
      <p>
        In future works, we would've liked to gather more participants for our
        usability tests to obtain more critiques on our interface. With more
        time and resources, a comparative analysis comparing the gift-giving
        process of users using Giftify versus other methods could have further
        helped us comprehend our app's fulfilment of the problem. We would have
        also liked to research colours, text size, branding and other visual
        aspects that could impact the usability of the app.
      </p>
    </div>
  );
};

export default Giftify;
