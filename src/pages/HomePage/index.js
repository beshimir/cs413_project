//helpers
import { useQueryUrl } from "../../lib/data";

// components
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Comment from "../../components/Comment";
import Recommendation from "../../components/Recommendation";
import VideoScreen from "../../components/VideoScreen";
import Toast from "../../components/Toast";

// data
import getData from "./data";

// wrappers
import MainWrapper from "./wrappers/Main"
import HeaderWrapper from "./wrappers/Header";
import CommentWrapper from "./wrappers/Comments";
import RecommendationWrapper from "./wrappers/Recommendations";
import VideoScreenWrapper from "./wrappers/VideoScreen";

// ui mappers
import { commentToComponent, recToComponent } from "./ui";
import { commentsUrl, recUrl, videoInfoUrl } from "../../config/api";
import LoadingRecommendation from "../../components/LoadingRecommendation";
import LoadingComment from "../../components/LoadingComment";





const HomePage = () => {
    //const data = getData();
    //const { recommendations, videoInfo, headerInfo } = data;
  

    const {
        data: recommendations,
        isLoading: isRecLoading,
        isError: isRecError,
    } = useQueryUrl({
        url: recUrl,
        init: [],
    });
    
    const {
        data: comments,
        isLoading: isCommentsLoading,
        isError: isCommentsError,
    } = useQueryUrl({
        url: commentsUrl,
        init: [],
    });
    
    const {
        
        data: videoInfo,
        isLoading: isVideoInfoLoading,
        isError: isVideoInfoError,
    } = useQueryUrl({
        url: videoInfoUrl,
        init: { word: "" },
    });
    
    const anythingLoading = isRecLoading || isCommentsLoading || isVideoInfoLoading;
    const anyError = isRecError || isCommentsError || isVideoInfoError;

      
    
    return (
        <>
        
        {anythingLoading && (
            <Toast error={false} msg={"Data is being loaded"} timeout={3500} />
        )}

        {anyError && (
            <Toast error={true} msg={"An error has occured"} timeout={3500} />
        )}


            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
        
        <MainWrapper>
           

            <Menu />

            <VideoScreenWrapper>
                {console.log(videoInfo.word)}
                {console.log("videoInfo")}
                {console.log("videoInfo")}
                <VideoScreen    title={videoInfo.word}
                                isLoading={isVideoInfoLoading}/> 
                <CommentWrapper>
                    {isCommentsLoading && <LoadingComment />}

                </CommentWrapper>
            </VideoScreenWrapper>
           
            <RecommendationWrapper>
                {!recommendations && <LoadingRecommendation />}

            </RecommendationWrapper>
            
        </MainWrapper>
        
        </>
    );
  };
  
  export default HomePage;
  