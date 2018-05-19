import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
  ModalFooter, Form, FormGroup, Label, Input
} from 'reactstrap';



class AddRecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hits: null
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  save(e) {
    let title = document.getElementById("recipeName").value;
    let ingredients = document.getElementById("ingredientList").value;
    localStorage.setItem(title, ingredients);
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add recipe</Button>
        <Modal isOpen={this.state.modal}
        toggle={this.toggle} className={this.props.className}>
          <Form>
          <ModalHeader toggle={this.toggle}>
          Add a Recipe</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="recipeName">Recipe Title</Label>
              <Input type="text" name="recipeTitle" id="recipeName" placeholder="Recipe Title" />
            </FormGroup>
            <FormGroup>
              <Label for="ingredientList">Ingredients</Label>
              <Input type="textarea" name="text" id="ingredientList" placeholder="Ingredients" cols="40" rows="5" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="success" onClick={this.save}>Save</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default AddRecipeModal
