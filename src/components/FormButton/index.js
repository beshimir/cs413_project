

const FormButton = ({
  type = "submit",
  onClick = () => {},
  onSubmit = () => {},
  children,
} = {}) => {

  if (type.startsWith("submit")) {
    return (
      <>
        
          <button   id="submitform" 
                    className="flex flex-row
                    items-center justify-center
                    h-10 w-24
                    mt-2 px-5 py-2 mx-auto mr-0
                    rounded-lg
                  bg-green-500
                  text-white
                    font-white text-sm"
                    type={type}
                    onClick={onClick}
                    onSubmit={onSubmit}>

              LOGIN!</button>
        
      </>
    );
  } else if (type.startsWith("danger")) {
    return (
      <>
        
        <button   id="submitform" 
                    className="flex flex-row
                    items-center justify-center
                    h-8 w-24
                    mr-5
                    rounded-lg
                  bg-red-600
                    text-white
                    font-white text-sm"
                    type={type}
                    onClick={onClick}
                    onSubmit={onSubmit}>

              LOGOUT!</button>
      </>
    );
  }
};



export default FormButton;
