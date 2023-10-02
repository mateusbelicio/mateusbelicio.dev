import { Link } from 'react-router-dom';

import image from '@/assets/preview.jpg';

function Home() {
  return (
    <main>
      <section className="py-24">
        <div className="container">
          <h1 className="text-primary/50 text-2xl font-bold">Hi, I am Mateus!</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quidem explicabo at
            placeat sint tempore fugiat quod voluptatum corporis, necessitatibus, quam sapiente
            repudiandae repellendus exercitationem odit blanditiis perferendis enim? Cumque.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quidem explicabo at
            placeat sint tempore fugiat quod voluptatum corporis, necessitatibus.
          </p>
        </div>
      </section>

      <section className="py-24" id="projects">
        <div className="container">
          <h2>Projects</h2>

          <ul>
            <li>
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolor ut
                quaerat ullam veniam incidunt unde odit explicabo.
              </p>
              <div>
                <button>Visit</button> <Link to="/projects/1">View more</Link>
              </div>
              <img src={image} alt="" />
            </li>
            <li>
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolor ut
                quaerat ullam veniam incidunt unde odit explicabo.
              </p>
              <div>
                <button>Visit</button> <Link to="/projects/1">View more</Link>
              </div>
              <img src={image} alt="" />
            </li>
            <li>
              <h3>Project Name</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolor ut
                quaerat ullam veniam incidunt unde odit explicabo.
              </p>
              <div>
                <button>Visit</button> <Link to="/projects/1">View more</Link>
              </div>
              <img src={image} alt="" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Home;
