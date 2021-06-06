import {Avatar, ListItem, Typography, Grid, ListItemAvatar} from "@material-ui/core"


const TrackSearchResult = ({track}: any) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar variant="square" src={track.album} alt={track.title}/>
            </ListItemAvatar>
            <Grid container direction="column">
                <Typography style={{fontSize: '1rem'}}> {track.title}</Typography>
                <Typography style={{color: '#999', fontSize: '.9rem'}} variant="subtitle1"
                            gutterBottom>
                    {track.artist}
                </Typography>
            </Grid>
        </ListItem>
    );
};

export default TrackSearchResult;