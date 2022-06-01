
const FormWrapper = ({ onSubmit = () => {}, children } = {}) => {
  return (
    <>
      <form
        id="loginformw"
        action="/login"
        className="loginform bg-slate-800 flex flex-col min-w-screen sm:w-6/12 mx-auto h-84 py-10 px-5"
        onSubmit={onSubmit()}>
        {children}
      </form>
    </>
  );
};

export default FormWrapper;
