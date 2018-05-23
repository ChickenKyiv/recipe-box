import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeCard = ({ _id, name, imageUrl, description, history }) => (

  <Card key={_id}>
    <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
        {`${description.substring(0, 100)}...`}
       </CardText>
      <Button onClick={() => history.push(`/view/${_id}`)}>Button</Button>
    </CardBody>
  </Card>
);

RecipeCard.defaultProps = {
  history: {},
};

RecipeCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(RecipeCard);
