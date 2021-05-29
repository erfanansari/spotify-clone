import React from "react";
import {Link} from 'react-router-dom'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HomeRounded from "@material-ui/icons/HomeRounded";
import ExploreRounded from "@material-ui/icons/ExploreRounded";
import LibraryMusicRounded from "@material-ui/icons/LibraryMusicRounded";
import PeopleIcon from '@material-ui/icons/People';
import AlbumRounded from "@material-ui/icons/AlbumRounded";
import FavoriteRounded from "@material-ui/icons/FavoriteRounded";
import QueryBuilderRounded from "@material-ui/icons/QueryBuilderRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const drawerWidth = 220
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
        toolbar: {...theme.mixins.toolbar, padding: '.4rem 0 1.1rem 0'},
        brandHeader: {
            margin: '.5rem 0 1rem 1rem',
            textDecoration: 'none'
        },
        subMenu: {
            color: "#666",
            marginLeft: '1.5rem'
        }
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
            return <PeopleIcon/>
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
            <div className={classes.toolbar}>
                <Typography variant="h2" component={Link} to="/" className={classes.brandHeader}>
                    Tunify
                </Typography>
            </div>
            <Typography variant="h6" className={classes.subMenu}>
                BROWSE
            </Typography>
            <List>
                {['Home', 'Explore', 'Songs', 'Artists', 'Albums'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={text.toLowerCase()}>
                        <ListItemIcon>
                            {chooseIcon(index)}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>

            <Typography variant="h6" className={classes.subMenu}>
                YOUR LIBRARY
            </Typography>
            <List>
                {['Recently Played', 'Favourites', 'Playlists'].map((text, index) => (
                    <ListItem button key={text} component={Link} to={text.toLowerCase()}>
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