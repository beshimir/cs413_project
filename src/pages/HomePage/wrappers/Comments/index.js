

const CommentWrapper = (props) => {
    return (
      <section className="flex flex-col lg:flex-row  mb-10 lg:justify-between comment mx-auto w-11/12 lg:w-8/12">
        {props.children}
      </section>
    );
  };
  
  
  export default CommentWrapper;
  