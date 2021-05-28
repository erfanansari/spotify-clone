import React from 'react'
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import {BrowserRouter, Route} from "react-router-dom";
import Menu from './Menu'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                {/*<Header*/}
                {/*    value={value}*/}
                {/*    setValue={setValue}*/}
                {/*    selectedIndex={selectedIndex}*/}
                {/*    setSelectedIndex={setSelectedIndex}*/}
                {/*/>*/}
                <Route path="/" render={props => (
                    <Menu {...props}>
                        <Route path="/home" exact component={() => <div>home</div>}/>
                        <Route path="/explore" exact component={() => <div>explore</div>}/>
                        <Route path="/favourites" exact component={() => <div>favourites</div>}/>
                        <Route path="/playlists" exact component={() => <div>playlists</div>}/>
                    </Menu>
                )}/>
                {/*<Switch>*/}
                {/*    <Route*/}
                {/*        exact*/}
                {/*        path="/"*/}
                {/*        render={props => (*/}
                {/*            <LandingPage*/}
                {/*                {...props}*/}
                {/*                setValue={setValue}*/}
                {/*                setSelectedIndex={setSelectedIndex}*/}
                {/*            />*/}
                {/*        )}*/}
                {/*    />*/}

                {/*</Switch>*/}
                {/*<Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />*/}
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
