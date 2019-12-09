import React from 'react';
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

// redux stuff
import { Provider } from "react-redux"
import store from "./store"

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Main />
                <Footer />
            </div>
        </Provider>
    );
}

export default App;


// https://transportapi.com/v3/uk/train/station/LES///timetable.json?app_id=312ac8d5&app_key=d9c2cbc5a2e718ed0090aea8c9c70b7e&destination=FST&train_status=passenger