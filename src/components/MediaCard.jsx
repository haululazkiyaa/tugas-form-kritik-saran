import PropTypes from "prop-types";

const MediaCard = (props) => {
  const { id, title, body } = props;
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <img
        src={`https://picsum.photos/id/${id}/300/300`}
        alt={title}
        className="w-full object-cover"
      />
      <div className="p-6">
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
    </div>
  );
};

MediaCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default MediaCard;
