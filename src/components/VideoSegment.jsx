import './VideoSegment.css';

const VideoSegment = () => {
  return (
    <div className="cr7">
      <video
        src="/src/assets/cr7.mp4"
        width="100%"
        controls={true}
        className="cr7-video"
      />
      <h2 className="cr7-hash">#CR7Life Museum</h2>
    </div>
  );
};

export default VideoSegment;
