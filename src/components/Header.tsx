import React from "react";
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {setSearchTerm} from "../redux/counterSlice";
import {Grid, Hidden, InputBase, AppBar, Avatar, Typography} from "@material-ui/core";
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom'

import Toolbar from "@material-ui/core/Toolbar";
import HomeRounded from "@material-ui/icons/HomeRounded";
import LibraryMusicRounded from "@material-ui/icons/LibraryMusicRounded";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from '@material-ui/icons/People';
import AlbumRounded from "@material-ui/icons/AlbumRounded";
import IconButton from '@material-ui/core/IconButton';


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
            backgroundColor: '#000'
        },
        search: {
            position: 'relative',
            borderRadius: '100px',
            backgroundColor: '#fff',
            marginRight: theme.spacing(6),
            color: '#000',
            marginLeft: 0,
            width: '20rem',
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

const chooseIcon = (i: number) => {
    if (i === 0)
        return <HomeRounded/>;
    if (i === 1)
        return <SearchIcon/>
    if (i === 2)
        return <LibraryMusicRounded/>
    if (i === 3)
        return <PeopleIcon/>
    if (i === 4)
        return <AlbumRounded/>
}
const Header = () => {
    const classes = useStyles()
    const searchTerm = useAppSelector(state => state.data.searchTerm)
    const user = useAppSelector(state => state.data.user)
    const dispatch = useAppDispatch()
    const location = useLocation()
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const menuId = 'primary-search-account-menu';
    // console.log(user)
    // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Hidden xsDown>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                {location.pathname === '/search' ? <InputBase
                                    value={searchTerm}
                                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{'aria-label': 'search'}}
                                /> : null}
                            </div>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" style={{marginRight: '1rem'}}>
                                <Avatar src={user && user.images[0].url}
                                        alt={user && user.display_name}
                                        style={{marginRight: '.8rem'}}/>
                                <Typography
                                    variant="subtitle2">{user && user.display_name}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid container justify="space-around">
                        {['Home', 'Explore', 'Songs', 'Artists', 'Albums'].map((text, index) => (
                            <IconButton color="inherit" key={text} component={Link}
                                        to={text.toLowerCase()}>
                                {chooseIcon(index)}
                            </IconButton>
                        ))}
                        {/*<IconButton color="inherit" component={Link} to="/home">*/}
                        {/*    <HomeRounded/>*/}
                        {/*</IconButton>*/}
                        {/*<IconButton color="inherit" component={Link} to="/explore">*/}
                        {/*    <SearchIcon/>*/}
                        {/*</IconButton>*/}
                        {/*<IconButton color="inherit" component={Link} to="/playlists">*/}
                        {/*    <AlbumRounded/>*/}
                        {/*</IconButton>*/}
                        {/*<IconButton color="inherit" component={Link} to="/favourites">*/}
                        {/*    <FavoriteRounded/>*/}
                        {/*</IconButton>*/}
                    </Grid>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
export default Header