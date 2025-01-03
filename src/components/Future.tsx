const Future = () => {
  return (
    <div className="flex flex-col text-overpass">
      <div>
        <h1 className="flex flex-row justify-center text-very-dark-blue font-bold text-center text-2xl">
          Designed for the Future
        </h1>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-very-dark-blue">
            Introducing an extensibble editor
          </h2>
          <p className="text-sm">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-very-dark-blue">
            Robust content management
          </h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Future;
