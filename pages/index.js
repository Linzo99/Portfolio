import Head from "next/head";
import AboutSection from "../components/AboutSection"
import ExperSection from "../components/ExperSection";
import SkillSection from "../components/SkillSection"
import ProjSection from "../components/ProjSection"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
	return (
		<div className="scroll-smooth">
			<Head>
				<title>Portfolio - Alioune</title>
				<meta name="description" content="Developper Portfolio" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet"/> 
				<script src="https://tarptaeya.github.io/repo-card/repo-card.js"></script>
			</Head>

			<main id="about_me" className="font-default relative min-w-screen min-h-screen flex-col p-10 md:p-20 bg-gradient-radial from-red-200 via-sky-200 to-sky-300 flex items-center">
				<div  className="mx-auto min-h-screen max-w-screen-xl glass flex flex-col items-center relative">
					<Navbar/>
					<div className="snap-y w-full h-full px-2 md:px-10 mt-10">
						<AboutSection/>
						<SkillSection/>
						<ExperSection/>
						<ProjSection/>
					</div>
				</div>
				<Footer/>
			</main>
			<Link href="#about_me">
				<span className="cursor-pointer fixed bottom-5 right-5 w-14 h-14 glass flex justify-center items-center shadow-lg rounded-full backdrop-blur-lg bg-white/60">
					<svg xmlns="http://www.w3.org/2000/svg" className="text-sky-800 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
					</svg>
				</span>
			</Link>
		</div>
	);
}
