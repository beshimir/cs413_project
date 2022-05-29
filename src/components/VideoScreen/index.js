

const VideoScreen = ({ title, isLoading = false }) => {
    return (
        <div className="video sm:largevideo-height video-height  lg:w-10/12 w-full mb-5 mx-auto">
            {isLoading && "Loader..."}

            {!isLoading && title}
        </div>
    );
  };
  
  
  export default VideoScreen;
  