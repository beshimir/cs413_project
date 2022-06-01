

const VideoScreen = ({ title, isLoading = false }) => {
    return (
        <div className="video sm:largevideo-height video-height  lg:w-10/12 w-full mb-5 mx-auto">
            {isLoading && "Loader..."}

            {!isLoading && <iframe className="w-full h-full" src={title} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        </div>
    );
  };
  
  
  export default VideoScreen;
  