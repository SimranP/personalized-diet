import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div class="page-header">
          <h1>Enter Your Details</h1>
        </div>
        <form className="form-horizontal">
          <div className="form-group">
            <label for="inputEmail3" className="col-sm-2 control-label">Age</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputEmail3" placeholder="years"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Body Fat Percentage</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputPassword3" placeholder="%"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Weight</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputPassword3" placeholder="lbs"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Height</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputPassword3" placeholder="centimeters"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Gender</label>
            <div className="col-sm-10">
            <div className="radio">
              <label className="radio-inline">
                <input type="radio" name="optionsRadios" id="inlineRadios1" value="option1" checked/>
                Male
              </label>
            </div>
            <div className="radio">
              <label class="radio-inline">
                <input type="radio" name="optionsRadios" id="inlineOptionsRadios2" value="option2" />
                Female
              </label>
            </div>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Meal Preference</label>
            <div className="col-sm-10">
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox1" value="option1"/> Vegeterian
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox2" value="option2"/> Non-Vegeterian
              </label>
              <label class="checkbox-inline">
                <input type="checkbox" id="inlineCheckbox3" value="option3"/> Vegan
              </label>
            </div>
          </div>
          <div className="form-group">
            <label for="inputPassword3" className="col-sm-2 control-label">Goal</label>
            <div className="col-sm-10">
              <div class="checkbox">
                <label>
                  <input type="checkbox" value=""/>
                  Reduce Weight
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value=""/>
                  Gain Stamina
                </label>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" value=""/>
                  Strengthen Bones
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default">Get Your Personalized Diet</button>
            </div>
        </div>
      </form>
      </div>
    );
  }
}

export default InputForm
