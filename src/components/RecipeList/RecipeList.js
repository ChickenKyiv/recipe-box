import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import PropTypes from 'prop-types';

import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => (
  <Card.Group itemsPerRow={5}>
    {recipes.map(recipe => RecipeCard(recipe))}
  </Card.Group>
);

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
    _id:         PropTypes.string.isRequired,
    name:        PropTypes.string.isRequired,
    imageUrl:    PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    })).isRequired,
};

export default RecipeList;
