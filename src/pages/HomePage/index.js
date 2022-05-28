

// components
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Comment from "../../components/Comment";
import Recommendation from "../../components/Recommendation";
import VideoScreen from "../../components/VideoScreen";

// data
//import getData from "./data";

// wrappers
import MainWrapper from "./wrappers/Main"
import HeaderWrapper from "./wrappers/Header";
import CommentWrapper from "./wrappers/Comments";
import RecommendationWrapper from "./wrappers/Recommendations";
import VideoScreenWrapper from "./wrappers/VideoScreen";

const HomePage = () => {
    //const data = getData();
    //const { recommendations, videoInfo, headerInfo } = data;
  
    return (
        <MainWrapper>

            <HeaderWrapper>
                <Header />
            </HeaderWrapper>

            <Menu />

            <VideoScreenWrapper>
                <VideoScreen />
                
            </VideoScreenWrapper>

            <CommentWrapper>
                <Comment />
            </CommentWrapper>
            <RecommendationWrapper>
                <Recommendation />
            </RecommendationWrapper>
            
        </MainWrapper>
    );
  };
  
  export default HomePage;
  