// main
import React, {PropTypes} from 'react';
import {createContainer}  from 'meteor/react-meteor-data';
import {Meteor}           from 'meteor/meteor';

// material-ui
import FontIcon     from 'material-ui/FontIcon';
import {Tabs, Tab}  from 'material-ui/Tabs';

// components
import LoginBox        from '/imports/ui/Login/LoginBox';

// containers
import {ItemListContainer} from '/imports/containers/Item/ItemListContainer';
import {ReportListContainer} from '/imports/containers/Report/ReportListContainer';


class App extends React.Component {
    render() {
      return(
        <Tabs>
          <Tab icon={<FontIcon className="material-icons">shopping_cart</FontIcon>} 
               label="SHOPPING LIST">
               <ItemListContainer />
          </Tab>
          <Tab icon={<FontIcon className="material-icons">equalizer</FontIcon>} 
               label="REPORT">
               <ReportListContainer />
          </Tab>
          <Tab icon={<FontIcon className="material-icons">chat</FontIcon>} 
               label="CHAT">
          </Tab>
          <Tab icon={<FontIcon className="material-icons">account_box</FontIcon>} 
               label="YOUR ACCOUNT">
          </Tab>          
        </Tabs>
      );
    }
}

export default App;