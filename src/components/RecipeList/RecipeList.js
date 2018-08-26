import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import PropTypes from 'prop-types';

// import RecipeCard from './RecipeCard';
import data from '@groceristar/groceristar-fetch/chickenKyiv';
import _ from 'lodash';

const RecipeList = ({ recipes }) => (
  <Card.Group itemsPerRow={5}>
    {data.getRecipe().forEach((item) => {
        console.log(item)
      }),
      recipes.map(recipe => RecipeCard(recipe))}
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
