import Card from "./Card";
import quizlang from "../public/images/quizlang.png";
import flickter from "../public/images/flickter.png";
import movieapp from "../public/images/movieapp.png";
import newsweb from "../public/images/news.png";
import todoapp from "../public/images/todoapp.png";

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
          image={quizlang}
          url="https://github.com/olcayhan/quizlet-clone"
          href="https://quizlang.vercel.app/auth"
          languages={["Next.js", "Tailwind"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="Quizlang"
        />
        <Card
          image={flickter}
          url="https://github.com/olcayhan/twitter-clone"
          href="https://flickter.vercel.app/"
          languages={["Next.js", "Tailwind"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="Twitter Clone"
        />
        <Card
          image={movieapp}
          url="https://github.com/olcayhan/movie-app"
          href="https://movieapp-demo.vercel.app/"
          languages={["Angular.js", "Bootstrap", "CSS"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="Movie App"
        />
        <Card
          image={todoapp}
          url="https://github.com/olcayhan/TodoApp"
          languages={["React.js", "Bootstrap", "CSS"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="TodoApp"
        />
        <Card
          image={newsweb}
          href="https://newswebsite-demo.vercel.app/"
          url="https://github.com/olcayhan/news-website"
          languages={["React.js", "Bootstrap", "CSS"]}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Sed distinctio cupiditate eaque provident rem perspiciatis similique dolorem deserunt!"
          title="News Website"
        />
      </div>
    </section>
  );
}
