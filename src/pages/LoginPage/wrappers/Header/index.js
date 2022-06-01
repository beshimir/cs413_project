
const HeaderWrapper = ({children}) => {
  return (
    <section className="headerwrapper text-slate-300 flex flex-row justify-between items-center my-5 mx-auto w-11/12">
      {children}
    </section>
  );
};

export default HeaderWrapper;
