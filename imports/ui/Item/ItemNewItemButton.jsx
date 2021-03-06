import React, {PropTypes} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import DialogBox from '/imports/ui/Dialog/DialogBox';


class ItemNewItemButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    _openDialog() {
        this.setState({open: true});
    };

    _closeDialog() {
        this.setState({open: false});
    };

    render() {
        return(
            <div className="sl-add-btn">
                <FloatingActionButton
                    mini={true}
                    onTouchTap={this._openDialog.bind(this)}
                >
                    <ContentAdd />
                </FloatingActionButton>

                <DialogBox 
                    open={this.state.open}
                    handleClose={this._closeDialog.bind(this)}
                    users={this.props.users}
                    ref="DialogBox"
                />
            </div>
        );
    }
}

export default ItemNewItemButton;