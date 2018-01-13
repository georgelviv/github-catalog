import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDataByUsername } from 'shared/actions';

class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputKeyPress = this.onInputKeyPress.bind(this);
  }

  onInputKeyPress(event) {
    if (event.key === 'Enter') this.onSubmit();
  }

  onSubmit() {
    if (this.userInput.value) {
      this.props.getUserData(this.userInput.value);
      // this.userInput.value = '';
    }
  }

  render() {
    return (
      <div className="form-group">
        <div className="input-group mb-3">
          <input onKeyPress={ this.onInputKeyPress } ref={ (el) => this.userInput = el } 
            type="text" className="form-control" placeholder="Github username" />
          <div className="input-group-append">
            <button onClick={ this.onSubmit } className="btn btn-outline-primary" type="button">Find</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUserData: username => {
      dispatch(getUserDataByUsername(username))
    }
  }
};

export default connect(null, mapDispatchToProps)(UserSearch);