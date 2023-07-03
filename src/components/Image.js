const Image = ({ data }) => {
  return (
    <a href={data.urls.regular} target="_blank" rel="noreferrer">
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className="h-72 w-full object-cover rounded-lg shadow-md"
      />
    </a>
  );
};

export default Image;
