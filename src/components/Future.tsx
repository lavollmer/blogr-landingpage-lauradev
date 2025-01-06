import IllustrationEditor from "../assets/illustration-editor-desktop.svg";
import IllustrationEditorMobile from "../assets/illustration-editor-mobile.svg";

const Future = () => {
  return (
    <div className="relative flex flex-col text-overpass z-10">
      <div className="absolute z-0">
          <img
            src={IllustrationEditor}
            alt="Illustration Editor"
            className="size-1/2"
          />
        </div>
      <div className="flex flex-row justify-center text-center pt-10">
        <h1 className="flex flex-row justify-center text-very-dark-blue font-bold text-center text-2xl">
          Designed for the Future
        </h1>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4 m-10">
        <div className="flex flex-col space-y-4 m-10">
          <div className="flex flex-col space-y-4 m-10">
            <h2 className="font-bold text-very-dark-blue text-lg">
              Introducing an extensible editor
            </h2>
            <p className="text-sm text-left text-grayish-blue">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="flex flex-col space-y-4 m-10">
            <h2 className="font-bold text-very-dark-blue text-lg">
              Robust content management
            </h2>
            <p className="text-sm text-left text-grayish-blue">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
