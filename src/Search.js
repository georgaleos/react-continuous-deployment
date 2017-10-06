import React, { Component } from 'react';
import {
  Button,
  ButtonToolbar,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Grid,
  HelpBlock,
  Row
} from 'react-bootstrap';
import SearchClient from './SearchClient';

const MATCHING_ITEM_LIMIT = 25;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: props.searchKey || '',
      results: [],
      foods: [],
      showRemoveIcon: false
    };

    this.handleSearchKeyChange = this.handleSearchKeyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSearchKeyChange = event => {
    this.setState({ searchKey: event.target.value });
  };

  handleClear(event) {
    if (!this.canBeSubmitted()) {
      event.preventDefault();
      return;
    }

    this.setState({
      foods: [],
      showRemoveIcon: false,
      searchKey: ''
    });
  }

  handleSubmit(event) {
    if (!this.canBeSubmitted()) {
      event.preventDefault();
      return;
    }
    const { searchKey } = this.state;
    console.log(`Searched: ${searchKey}`);

    if (this.state.searchKey === '') {
      this.setState({
        foods: [],
        showRemoveIcon: false
      });
    } else {
      this.setState({
        showRemoveIcon: true
      });

      SearchClient.search(this.state.searchKey, foods => {
        this.setState({
          foods: foods.slice(0, MATCHING_ITEM_LIMIT)
        });
      });
    }
  }

  canBeSubmitted() {
    const errors = Search.validate(this.state.searchKey);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  static validate(searchKey) {
    return {
      searchKey: searchKey.length === 0
    };
  }

  render() {
    const errors = Search.validate(this.state.searchKey);
    const submitDisabled = Object.keys(errors).some(x => errors[x]);

    {
      /*<tr key={idx} onClick={() => this.props.onFoodClick(food)}>*/
    }
    const foodRows = this.state.foods.map((food, idx) => (
      <tr key={idx}>
        <td>{food.description}</td>
        <td className="right aligned">{food.kcal}</td>
        <td className="right aligned">{food.protein_g}</td>
        <td className="right aligned">{food.fat_g}</td>
        <td className="right aligned">{food.carbohydrate_g}</td>
      </tr>
    ));

    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={8} mdOffset={2}>
            <Form horizontal>
              <FormGroup
                controlId="searchKey"
                validationState={errors['searchKey'] ? 'error' : null}
              >
                <Col componentClass={ControlLabel} sm={2}>
                  Search
                </Col>
                <Col sm={10}>
                  <FormControl
                    value={this.state.searchKey}
                    type="text"
                    placeholder="Search Key"
                    onChange={this.handleSearchKeyChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Type your search keyword.</HelpBlock>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <ButtonToolbar>
                    <Button
                      disabled={submitDisabled}
                      onClick={this.handleSubmit}
                      bsStyle="primary"
                    >
                      Search
                    </Button>
                    <Button
                      disabled={submitDisabled}
                      onClick={this.handleClear}
                    >
                      Clear
                    </Button>
                  </ButtonToolbar>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <div id="food-search">
              <table className="ui selectable structured large table">
                <thead>
                  <tr>
                    <th className="eight wide">Description</th>
                    <th>Kcal</th>
                    <th>Protein (g)</th>
                    <th>Fat (g)</th>
                    <th>Carbs (g)</th>
                  </tr>
                </thead>
                <tbody>{foodRows}</tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Search;
