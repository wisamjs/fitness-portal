import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const App = ({children}) => {
  return (
    <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
	    <div>
	      {children}
	    </div>
    </MuiThemeProvider>
  );
}

export default App;
