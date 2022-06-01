

const MainWrapper = ({children}) => {
  return (
    <section className="text-slate-300 w-full md:w-11/12 flex flex-col lg:flex-row mx-auto ">
      {children}
    </section>
  );
};


export default MainWrapper;
