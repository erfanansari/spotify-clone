import {Grid} from "@material-ui/core"


const TrackSearchResult = ({track}: any) => {
    return (
        <Grid container>
            <img src={track.album} alt={track.name}/>
            {/*<img src={track.album} style={{height:'64px',width:'64px'}} alt={""}/>*/}
            <h5>{track.title}</h5>
            <h5>{track.artist}</h5>
        </Grid>
    );
};

export default TrackSearchResult;