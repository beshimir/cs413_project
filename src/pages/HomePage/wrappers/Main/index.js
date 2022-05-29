

const MainWrapper = (props) => {
  return (
    <section className="flex flex-col lg:flex-row w-full">
      {props.children}
    </section>
  );
};


export default MainWrapper;
