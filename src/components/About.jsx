import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about-img" className="w-full h-64" />
        <article>
          <SectionTitle text="About me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am an Innovative task driven professional with 4+ years experience
            in web design and development, Equipped with a record of success in
            consistently identifying and providing the technological needs of
            companies through ingenious innovations. Proficient in developing
            databases, creating user interface, writing and testing codes,
            troubleshooting simple/complex issues and implementing new features
            based on user feedback.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
