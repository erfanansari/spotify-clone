import React from 'react'
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SideMenu from './Menu'

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
                <Route path="/" component={SideMenu}/>
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
