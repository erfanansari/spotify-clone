import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeRounded from "@material-ui/icons/HomeRounded";
import ExploreRounded from "@material-ui/icons/ExploreRounded";
import LibraryMusicRounded from "@material-ui/icons/LibraryMusicRounded";
import SearchIcon from "@material-ui/icons/Search";
import PersonRounded from "@material-ui/icons/PersonRounded";
import AlbumRounded from "@material-ui/icons/AlbumRounded";
import FavoriteRounded from "@material-ui/icons/FavoriteRounded";
import QueryBuilderRounded from "@material-ui/icons/QueryBuilderRounded";
import AppBar from "@material-ui/core/AppBar";
import {Grid, Hidden, InputBase} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import {fade, createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                top: 0,
                bottom: 'unset'
            },
            bottom: 0,
            top: 'unset',
            left: 'auto',
            right: 0,
            position: 'fixed',
            marginLeft: drawerWidth,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        userIcon: {
            [theme.breakpoints.up('md')]: {
                marginRight: '.5rem'
            }
        }
    }))

const Header = () => {
    const classes = useStyles()
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuId = 'primary-search-account-menu';

    // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                {/*<Typography variant="h6" noWrap>*/}
                {/*    Permanent drawer*/}
                {/*</Typography>*/}
                <Hidden xsDown>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </div>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.userIcon}
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                // onClick={handleProfileMenuOpen}
                                        color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid container justify="space-around">
                        <IconButton color="inherit" component={Link} to="/home">
                            <HomeRounded/>
                        </IconButton>
                        <IconButton color="inherit" component={Link} to="/explore">
                            <SearchIcon/>
                        </IconButton>
                        <IconButton color="inherit" component={Link} to="/playlists">
                            <AlbumRounded/>
                        </IconButton>
                        <IconButton color="inherit" component={Link} to="/favourites">
                            <FavoriteRounded/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
export default Header