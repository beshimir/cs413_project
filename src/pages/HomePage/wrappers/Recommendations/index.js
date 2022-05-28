

const RecommendationWrapper = (props) => {
    return (
        <div className="recommendations w-8/12 sm:w-11/12 lg:w-2/12 p-0 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap justify-between mx-auto lg:mx-0">
            {props.children}
        </div>    
    );
  };
  
  
  export default RecommendationWrapper;
  