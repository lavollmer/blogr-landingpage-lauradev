import "../App.css";
import Editor from "../assets/illustration-editor-desktop.svg"

const Future = () => {
  return (
    <div className="flex flex-col font-overpass z-10">
      <div className="flex flex-col md:flex-row justify-center text-center md:pt-20 pt-10">
        <h1 className="flex flex-row justify-center text-very-dark-blue font-bold text-center text-2xl md:text-3xl">
          Designed for the Future
        </h1>
      </div>
      <div className="md:hidden flex flex-row justify-center p-4">
        <img src={Editor} alt="Editor" />
      </div>
      <div className="flex flex-row grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col space-y-4 p-10 md:p-20">
          <div className="flex flex-col text-left space-y-4">
            <h2 className="font-bold text-very-dark-blue text-2xl">
              Introducing an extensible editor
            </h2>
            <p className="text-md text-left text-very-dark-grayish-blue font-light">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="flex flex-col text-left space-y-4 pt-10">
            <h2 className="font-bold text-very-dark-blue text-2xl">
              Robust content management
            </h2>
            <p className="text-md text-left text-very-dark-grayish-blue font-light">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center p-20">
          <img src={Editor} alt="Editor" />
        </div>
      </div>
    </div>
  );
};

export default Future;
