
const MainWrapper = ({children}) => {
  return (
    <div
      class="
        flex flex-col 
        mainwrapper
        w-screen min-h-screen
        p-6
      ">
      {children}
    </div>
  );
};

export default MainWrapper;
