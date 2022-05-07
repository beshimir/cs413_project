import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  
  const initialState1 = "blue";
	const initialState2 = "green";

	let [colorState1, setColorState1] = useState(initialState1);
	let [colorState2, setColorState2] = useState(initialState1);

	const changeColorState1 = () => {
		if (colorState1 === initialState1) {
			setColorState1(initialState2);
		} else {
			setColorState1(initialState1);
		}
	};

	const changeColorState2 = () => {
		if (colorState2 === initialState1) {
			setColorState2(initialState2);
		} else {
			setColorState2(initialState1);
		}
	};
  
  return (
    <>
			<section className="title-container">
				<div className="title my-5 mx-20 xl:mx-48">
          logo
        </div>
			</section>

			<section className="flex flex-col lg:flex-row post-container h-100 px-20 mb-10 xl:px-48 w-screen">
				<div className="hidden lg:mr-auto lg:flex lg:flex-column ads lg:ads-height lg:w-32 lg:mr-48 xl:w-72">
					ads/reccs
				</div>

				<div className="flex flex-col posts w-full self-center items-center lg:items-end">
					<div className="post post-height w-full mb-5">
            main screen
          </div>
					<div className="like like-height w-full mb-10">
						main title
					</div>
				</div>

      <dir className="recommendations flex flex-row lg:flex-col flex-wrap lg:flex-nowrap justify-between px-20">
        <div className="reccs w-full sm:w-5/12 lg:w-full h-48 bg-white mb-10">
          recommendation
        </div>  
        <div className="reccs w-full sm:w-5/12 lg:w-full h-48 bg-white mb-10">
          recommendation
        </div>
        <div className="reccs w-full sm:w-5/12 lg:w-full h-48 bg-white mb-10">
          recommendation
        </div>
        <div className="reccs w-full sm:w-5/12 lg:w-full h-48 bg-white mb-10">
          recommendation
        </div>
      </dir>        
        
    
        
       
      </section>
		</>
  );
}

export default App;
