import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
  ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EditRecipeModal extends Component {
    constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hits: null,
      recipe: this.props.recipe,
      ingredients: this.props.ingredients
    };
    this.toggle = this.toggle.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  update(e) {
    /*e.preventDefault();
    let value = document.getElementById(this.props.i).value;
    localStorage.setItem(this.props.recipe, value);
    {this.toggle()};*/
  }

  delete(e) {
    console.log("ckic");
    /*e.preventDefault();
    console.log("clicked");
    localStorage.removeItem(this.props.recipe);*/
  }

  handleSubmit(e){
    localStorage.setItem(this.props.recipe,
      document.getElementById(this.props.i).value);
  }

  handleReset(e){
    localStorage.removeItem(this.props.recipe);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} color="info">
        <FontAwesomeIcon icon="envelope"></FontAwesomeIcon>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="editModal">
          <Form>
          <ModalHeader id={this.props.recipe} toggle={this.toggle}>Edit {this.props.recipe}</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="ingredientList">Ingredients</Label>
              <Input type="textarea" name="text" id={this.props.i} defaultValue={this.props.ingredients} cols="40" rows="5" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="success" onSubmit={this.handleSubmit}>Save</Button>{' '}
            <Button type="submit" color="danger" onClick={this.handleReset}>Delete</Button>
          </ModalFooter>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default EditRecipeModal
