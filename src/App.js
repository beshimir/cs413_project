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
			<section className="mx-auto w-11/12 my-5">

				<div className="title h-10 w-full">logo</div>

			</section>



			<section className="flex flex-col mx-auto lg:flex-row h-100 mb-10 w-11/12 lg:justify-between">

				<div className="hidden lg:flex lg:flex-column ads lg:ads-height w-2/12">

					ads/reccs

				</div>



				<div className="posts mx-auto w-11/12 lg:w-8/12">

					<div className="post post-height lg:w-10/12 mb-5 mx-auto">main screen</div>

					<div className="like like-height lg:w-10/12 mb-10 mx-auto">main title</div>

				</div>



				<div className="recommendations w-8/12 sm:w-11/12 lg:w-2/12 p-0 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap justify-between mx-auto lg:mx-0">

					<div className="reccs w-full sm:w-5/12 lg:w-full h-40 lg:h-24 bg-white mb-10">

						recommendation

					</div>

					<div className="reccs w-full sm:w-5/12 lg:w-full h-40 lg:h-24 bg-white mb-10">

						recommendation

					</div>

					<div className="reccs w-full sm:w-5/12 lg:w-full h-40 lg:h-24 bg-white mb-10">

						recommendation

					</div>

					<div className="reccs w-full sm:w-5/12 lg:w-full h-40 lg:h-24 bg-white mb-10">

						recommendation

					</div>

				</div>

			</section>
		</>
  );
}

export default App;
