

const VideoScreenWrapper = (props) => {
  return (
    <section className="flex flex-col lg:flex-row h-100 mb-10 lg:justify-between posts mx-auto w-11/12 lg:w-8/12">
      {props.children}
    </section>
  );
};


export default VideoScreenWrapper;
