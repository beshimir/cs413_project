

const VideoScreenWrapper = (props) => {
  return (
    <section className="flex flex-col mb-10 posts mx-auto w-11/12 lg:w-8/12">
      {props.children}
    </section>
  );
};


export default VideoScreenWrapper;
