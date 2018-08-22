import React      from 'react';
import Badge      from 'recipe-components/Badge';
import Card       from 'recipe-components/Card';
import CardHeader from 'recipe-components/CardHeader';
import CardBody   from 'recipe-components/CardBody';
import Heading    from 'recipe-components/Heading';

import data from '@groceristar/groceristar-fetch/chickenkyiv';

/** Card with CardHeader and CardBody */
export default class List extends React.Component {
  constructor(props){
    super(props)
    this.state: {
      recipes: props.recipes
    }
  }
  render() {
    console.log(data.getIngredients3());
    console.log(data.getMenu());
    console.log(data.getRecipe());
    console.log(data.getNutritions1());
    console.log(data.getNutritions2());
    return (
      <Card>
        <CardHeader>
          <Heading level="2">Pecan Pie</Heading>
          <Badge>
            Dessert
          </Badge>
          <p>Author: Jean Wilson</p>
        </CardHeader>
        <CardBody>
          <Heading level="3">Ingredients</Heading>
          <ul>
            <li>3 eggs</li>
            <li>1 c. white sugar</li>
            <li>dash salt</li>
            <li>1 tsp. vanilla</li>
            <li>1/2 c. dark Karo syrup</li>
          </ul>
          <Heading level="3">Directions</Heading>
          <p>Melt 6 Tbsp. butter, mix in. Add 1 c. chopped nuts. Bake 57 mins. at 325 or 350.</p>
        </CardBody>
      </Card>
    );
  }
}
