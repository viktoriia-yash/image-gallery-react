const Header = ({ children }) => {
  return (
    <div className="flex items-center py-8">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-center text-4xl tracking-[3px]">
          ❀ Image Gallery ❀
        </h1>
        <p className="text-center text-[11px] mb-3">
          <a
            href="https://github.com/viktoriia-yash/image-gallery-react"
            className="github"
            rel="noopener noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Viktoriia Yashkina
        </p>
        {children}
      </div>
    </div>
  );
};

export default Header;
