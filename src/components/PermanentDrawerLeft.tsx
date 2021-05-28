import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HomeRounded from "@material-ui/icons/HomeRounded";
import ExploreRounded from "@material-ui/icons/ExploreRounded";
import LibraryMusicRounded from "@material-ui/icons/LibraryMusicRounded";
import PersonRounded from "@material-ui/icons/PersonRounded";
import AlbumRounded from "@material-ui/icons/AlbumRounded";
import FavoriteRounded from "@material-ui/icons/FavoriteRounded";
import QueryBuilderRounded from "@material-ui/icons/QueryBuilderRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
    }),
);


const PermanentDrawerLeft = () => {
    const classes = useStyles();
    const chooseIcon = (i: number) => {
        if (i === 0)
            return <HomeRounded/>;
        if (i === 1)
            return <ExploreRounded/>
        if (i === 2)
            return <LibraryMusicRounded/>
        if (i === 3)
            return <PersonRounded/>
        if (i === 4)
            return <AlbumRounded/>
    }
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {['Home', 'Explore', 'Songs', 'Artists', 'Albums'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {chooseIcon(index)}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Recently Played', 'Favourites', 'Playlists'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index === 0 ? <QueryBuilderRounded/> : index === 1 ?
                                <FavoriteRounded/> : <LibraryMusicRounded/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
export default PermanentDrawerLeft