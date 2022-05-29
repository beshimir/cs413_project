

const CommentWrapper = ({children}) => {
    return (
      <section className="flex flex-col w-full mx-auto mb-10 lg:justify-between comment lg:w-10/12">
        {children}
      </section>
    );
  };
  
  
  export default CommentWrapper;
  