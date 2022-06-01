//helpers
import { useQueryUrl } from "../../lib/data";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/auth";

// components
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Comment from "../../components/Comment";
import Recommendation from "../../components/Recommendation";
import VideoScreen from "../../components/VideoScreen";
import Toast from "../../components/Toast";
import FormButton from "../../components/FormButton";

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
    const history = useHistory();

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
        init: { title: "" },
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
                <FormButton onClick={() => logout(history)} type="danger" />
            </HeaderWrapper>
        
        <MainWrapper>
           

            <Menu />
           
            <VideoScreenWrapper>
                <VideoScreen    title={videoInfo.title}
                                isLoading={isVideoInfoLoading}/> 
                <CommentWrapper>
                    {isCommentsLoading && <LoadingComment />}
                    
                    {!isCommentsLoading && comments.map(commentToComponent)}

                </CommentWrapper>
            </VideoScreenWrapper>
           
            <RecommendationWrapper>
                {!recommendations && <LoadingRecommendation />}
               
                {recommendations.map(recToComponent)}
            </RecommendationWrapper>
            
        </MainWrapper>
        
        </>
    );
  };
  
  export default HomePage;
  