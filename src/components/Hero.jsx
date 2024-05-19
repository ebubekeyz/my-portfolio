import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import heroImg from '../assets/hero.svg';
import ebubeImg from '../assets/ebube.png';

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Joseph</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            FullStack Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>

            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>

            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        <article className="hidden md:block border-8 border-x-emerald-500 border-y-emerald-700 w-60 h-60  rounded-full">
          <img
            src={ebubeImg}
            alt="hero image"
            className="w-full h-full rounded-full object-cover"
          />
        </article>
      </div>
    </div>
  );
};
export default Hero;
