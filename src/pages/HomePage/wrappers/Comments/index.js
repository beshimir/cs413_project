

const CommentWrapper = ({children}) => {
    return (
      <section className="commentwrapper p-2 flex flex-col w-full mx-auto mb-10 lg:justify-between lg:w-10/12">
        {children}
      </section>
    );
  };
  
  
  export default CommentWrapper;
  