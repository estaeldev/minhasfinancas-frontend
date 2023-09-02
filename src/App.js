import React from "react";

import 'bootswatch/dist/flatly/bootstrap.css';
import './global.scss';
import Login from "./views/login/login";

class App extends React.Component {

    render() {
        return (
            <div>
                <Login></Login>
            </div>
        )
        
    }

}

export default App;
