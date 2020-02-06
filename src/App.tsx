import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import './App.css';
import SnsLink from "./components/SnsLink";

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <div id="App-links">
          <ul>
            <li>
              <SnsLink
                color="rgb(255, 255, 255)"
                backgroundColor="rgb(29, 161, 242)"
                href="https://twitter.com/stin_factory">
                <FontAwesomeIcon icon={faTwitter} />
              </SnsLink>
            </li>
            <li>
              <SnsLink
                color="rgb(255, 255, 255)"
                backgroundColor="#24292e"
                href="https://github.com/stin-dev">
                <FontAwesomeIcon icon={faGithub} />
              </SnsLink>
            </li>
          </ul>
        </div>
        <section className="main-content">
          <h1 id="stin-devs-application">stin-dev’s Application</h1>

          <h3 id="hello-splatoon-bot">Hello Splatoon Bot</h3>

          <p>Send names of Splatoon Weapon to your Discord channel at random.</p>

          <p><a href="https://github.com/stin-dev/hello-splatoon-bot">Repository</a></p>

          <p><a href="https://stin-dev.github.io/hello-splatoon-bot">web site</a></p>

          <h3 id="helloblog">Hello!Blog</h3>

          <p>You can access Hello!Project member blogs via this app.</p>

          <p><a href="https://github.com/stin-dev/hello-blog-reader">Repository</a></p>

          <p><a href="https://hello-blogs.firebaseapp.com">web site</a></p>

          <h3 id="thinking-generator">thinking-generator</h3>

          <p>Tweet a text you think with an image containing your Twitter icon and a text that is “YOUR NAME thought ~ .”.</p>

          <p><a href="https://github.com/stin-dev/thinking-generator">Repository</a></p>

          <p><a href="https://thinking-generator.web.app">web site</a></p>

          <h3 id="population-chart">Population Chart</h3>

          <p>This is a Single Page Application that show a population chart by prefectures.</p>

          <p><a href="https://github.com/stin-dev/PopulationChart">Repository</a></p>

          <p><a href="https://stin-dev.github.io/PopulationChart">web site</a></p>

          <h1 id="blog">Blog</h1>

          <p>https://qiita.com/stin_dev</p>
        </section>
      </div>
    </div>
  );
}

export default App;
