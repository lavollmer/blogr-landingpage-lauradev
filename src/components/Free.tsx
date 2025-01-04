import Laptop from "../assets/illustration-laptop-desktop.svg";

const Free = () => {
  return (
    <div className="flex flex-row">
      <div>
        <img src={Laptop} alt="laptop" />
      </div>
      <div className="flex flex-col space-y-4 p-10">
        <div>
          <h1 className="font-bold">Free, open, simple</h1>
          <p className="text-sm text-left">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h1 className="font-bold">Powerful tooling</h1>
          <p className="text-sm text-left">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Free;
