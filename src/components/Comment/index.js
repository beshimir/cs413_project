

const Comment = ({ prop }) => {
    return (
        <div className="flex flex-col comment p-2 w-10/12 mb-5 mx-auto">
            <div className="text-slate-300 mb-2 text-clip">{prop.text}</div>
            <hr></hr>
            <div className="text-sm text-slate-500">{prop.username}</div>
        </div>
    );  
  };
  
  
  export default Comment;
  