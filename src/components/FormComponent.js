import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  changeHandler = event => {
    event.preventDefault();

    this.setState({
      email: event.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} />
      </form>
    );
  }
}

export default FormComponent;
