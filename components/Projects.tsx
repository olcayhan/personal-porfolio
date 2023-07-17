import Card from "./Card";
import quizlang from "../public/images/quizlang/quizlang.png";
import quizlang2 from "../public/images/quizlang/quizlang2.png";
import quizlang3 from "../public/images/quizlang/quizlang3.png";
import quizlang4 from "../public/images/quizlang/quizlang4.png";

import movieapp from "../public/images/movieapp/movieapp.png";
import movieapp2 from "../public/images/movieapp/movieapp2.png";
import movieapp3 from "../public/images/movieapp/movieapp3.png";
import movieapp4 from "../public/images/movieapp/movieapp4.png";

import todoapp from "../public/images/todoapp/todoapp.png";
import todoapp2 from "../public/images/todoapp/todoapp2.png";
import todoapp3 from "../public/images/todoapp/todoapp3.png";
import todoapp4 from "../public/images/todoapp/todoapp4.png";

import billtrack from "../public/images/bill-track/bill-track.png";
import billtrack2 from "../public/images/bill-track/bill-track2.png";
import billtrack3 from "../public/images/bill-track/bill-track3.png";
import billtrack4 from "../public/images/bill-track/bill-track4.png";

import flickter1 from "../public/images/flickter/flickter1.png";
import flickter2 from "../public/images/flickter/flickter2.png";
import flickter3 from "../public/images/flickter/flickter3.png";
import flickter4 from "../public/images/flickter/flickter4.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center w-4/6 mx-auto min-h-screen py-16"
    >
      <div className="flex flex-col justify-center gap-2 w-full py-10">
        <h1 className="text-blue-600 text-lg font-extrabold">PROJECTS</h1>
        <h1 className="text-3xl font-extrabold">All my projects is here</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-16">
        <Card
          images={[flickter1, flickter2, flickter3, flickter4]}
          url="https://github.com/olcayhan/twitter-clone"
          href="https://flickter.vercel.app/"
          languages={["Next.js", "Tailwind"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="Flickter - Twitter Clone"
        />
        <Card
          images={[quizlang, quizlang2, quizlang3, quizlang4]}
          url="https://github.com/olcayhan/quizlet-clone"
          href="https://quizlang.vercel.app/"
          languages={["Next.js", "Tailwind"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="Quizlet Clone"
        />

        <Card
          images={[todoapp, todoapp2, todoapp3, todoapp4]}
          url="https://github.com/olcayhan/TodoApp"
          href="https://todoapp-demo-olcayhank.vercel.app/"
          languages={["React.js", "Tailwind", "Node.js"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="TodoApp"
        />
        <Card
          images={[movieapp, movieapp2, movieapp3, movieapp4]}
          url="https://github.com/olcayhan/movie-app"
          href="https://movieapp-demo.vercel.app/"
          languages={["Angular.js", "Bootstrap", "CSS"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="Movie App"
        />
        <Card
          images={[billtrack, billtrack2, billtrack3, billtrack4]}
          url="https://github.com/olcayhan/bill-tracking"
          href="https://bill-track.vercel.app/"
          languages={["React.js", "Bootstrap", "CSS", "Node.js"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="Bill Tracking Service"
        />
      </div>
    </section>
  );
}
