import Image from "next/image";
import pic from "../public/images/about.png";
export default function About() {
  return (
    <section
      id="about"
      className="flex flex-row justify-center items-center w-4/6 mx-auto min-h-screen py-16"
    >
      <div className="flex flex-col 2xl:flex-row justify-center items-center gap-10">
        <div className="flex flex-row justify-center items-center w-full">
          <Image src={pic} alt="image" className="w-72 h-72 rounded-md" />
        </div>
        <div className="flex flex-col justify-center gap-4 w-full">
          <h1 className="text-blue-600 text-lg font-extrabold">ABOUT ME</h1>
          <h1 className="text-3xl font-extrabold">Full Stack Developer</h1>
          <p className="text-md opacity-90">
            I&apos;m Olcay Han, I am currently a Computer Engineering student at
            Bandırma 17 Eylül University in Turkey. I&apos;m passionate about Web
            Development, I am coding with React, Javascript, Node.js and Python.
            <br />I am a passionate person and I&apos;m hungry to learn new
            things. I have powerful observing and Problem Solving skills. I have
            some projects with Javascript, React.js and Python. You can see that
            in my GitHub profile.
          </p>
        </div>
      </div>
    </section>
  );
}
