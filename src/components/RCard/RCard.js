import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const RCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and
            make up the bulk of the cards content.
           </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RCard;

// Card.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   inverse: PropTypes.bool,
//   color: PropTypes.string,
//   body: PropTypes.bool,
//   className: PropTypes.string
// };
//
// CardBody.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardColumns.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardDeck.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardFooter.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardGroup.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardHeader.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardImg.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
//   top: PropTypes.bool,
//   bottom: PropTypes.bool
// };
//
// CardImgOverlay.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardLink.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string,
//   // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
//   innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
// };
//
// CardSubtitle.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardText.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
//
// CardTitle.propTypes = {
//   // Pass in a Component to override default element
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   className: PropTypes.string
// };
