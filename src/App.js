
import './App.css';
import HeaderComp from './components/HeaderComp';
import soft from './assets/soft.jpg';
import { FaGithub, FaLocationArrow, FaMailBulk} from 'react-icons/fa';
import { educations, projects } from './data/data';
import { experience } from './data/data';


function App() {
  return (
    <div className="main">
      <HeaderComp />
      <div className="body-container">
        <div className="left">
          <section className="about">
            <article>
              <h2>A propos de moi</h2>
              <p>Je suis un étudiant passionné en ingénierie logicielle à EFREI Paris, où j'ai développé une passion pour la création de solutions logicielles innovantes et efficaces. Mon parcours académique et mes expériences de projet m'ont permis de maîtriser diverses technologies et langages de programmation, notamment Vue.js, Python, Django, Scala, Java, C++, C#, React, et Flutter. Ma curiosité technique m'a également conduit à explorer différents systèmes de gestion de bases de données comme MongoDB, MySQL Workbench, et PostgreSQL. Cette diversité de compétences renforce ma capacité à concevoir des architectures de données robustes et à optimiser les interactions backend. Utilisateur actif de GitHub, j'emploie cette plateforme pour le contrôle de version, assurant une gestion et une collaboration efficaces sur mes projets. Pour le développement, je privilégie Visual Studio Code et IntelliJ, qui offrent des environnements riches en fonctionnalités adaptés à mes besoins en développement multi-langages. Je suis toujours en quête de nouvelles opportunités pour mettre en pratique mes compétences dans des projets stimulants, cherchant à innover et à pousser les limites de ce que la technologie peut réaliser.</p>
            </article>
          </section>
          <section className="projects">
            <h2>Mes projets </h2>
            <article>
              <img className='featured-img' src={soft} alt="slug" />
              {/*<div className="project-info">
                <p>Project description goes here...</p>
                                              There is my Github  
                <div className="contact-item">
                <a href="https://github.com/Aurielle-hash/SMART_DRY_CLEANER_2A5"  target="_blank" rel="noopener noreferrer">
                   <FaGithub/>
                        </a>
                    </div>
              </div>*/}
            </article>
            <hr/>
            {
              projects.map((item)=>{
                return (
                  <article className='article-item'>
              <div className="left">
                <img 
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="right">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="contact-item">
                <a href={item.github}  target="_blank" rel="noopener noreferrer" onClick={() => console.log('Icon clicked')}>
                        <FaGithub size='30px'/> 
                        </a>
                    </div>
              </div>
            </article>
                );
              })
            }
          </section>
          <section className="experience">
            <h2>Experience professionnel</h2>
            {
              experience.map((item)=>{
                return (
                  <article>
                  <h3>{item.title}</h3>
                  <h5>{item.date}</h5>
                  <p>{item.description}</p>
                </article>
                );
              })
            }
          </section>
        </div>
        <aside>
          <div className="contacts section">
            <div className="contact-item">
              <FaLocationArrow/>
              <span>Ile de france, France</span>
            </div>
            <div className="contact-item">
              <FaMailBulk/>
              <span>abdoulaye.aboubakar@efrei.fr</span>
            </div>
          </div>
          <div className="skills section">
            <h2>compétences</h2>
            <p>Dans le cadre de mon parcours professionnel et académique, j'ai acquis des compétences sur plusieurs langages de programmation et technologies. Voici un aperçu de mes compétences :</p>
            <div className="skills-list">
            <div className="skill-item">
              <span>PYTHON && DJANGO</span>
              <div className="full">
                    <div className="percent python"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Vue.js</span>
              <div className="full">
                    <div className="percent vue"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Javascript - React js</span>
              <div className="full">
                    <div className="percent react"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>SCALA</span>
              <div className="full">
                    <div className="percent scala"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>JAVA</span>
              <div className="full">
                    <div className="percent java"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>C++</span>
              <div className="full">
                    <div className="percent cplus"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>C#</span>
              <div className="full">
                    <div className="percent csha"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Flutter Dart</span>
              <div className="full">
                    <div className="percent flutter"></div>
              </div>
            </div>
            <div className="skill-item">
              <span>HTML, CSS</span>
              <div className="full">
                    <div className="percent html"></div>
              </div>
            </div>
            </div>
            <p>En complément de ces compétences techniques, je sais travailler efficacement avec plusieurs environnements de développement intégrés (IDE) tels que Visual Studio Code et IntelliJ. J'utilise également GitHub pour la gestion du code source et la collaboration sur des projets.</p>
          </div>

          <div className="section">
            <h2>Formation</h2>
            {
              educations.map((item)=>{
                return (
                  <div className='education-item'>
                  <h3>{item.title}</h3>
                  <span>{item.name}</span>
                </div>
                );
              })
            }
          </div>

          <div className="section">
            <h2>Langues</h2>
            <div className="langues">
              <div className="langue-item">
                <h3>Anglais</h3>
                <span>compétences professionnelles</span>
                <div className="full">
                  <div className="percent anglais"></div>
                </div>
              </div>
              <div className="langue-item">
                <h3>Français</h3>
                <span>Langue maternelle</span>
                <div className="full">
                  <div className="percent francais"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <p>© 2024 Aboubakar Mohamed Abdoulaye . Tous droits réservés.</p>
      </footer>

    </div>
  );
}

export default App;
