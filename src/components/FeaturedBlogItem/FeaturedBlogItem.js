import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@material-ui/core';
import PropTypes from 'prop-types';
import classes from './FeaturedBlogItem.css';
import { createDescription } from '../../util/StringUtils'

const featuredBlogItem = (props) => (
    <Card onClick={props.clickHandler} className={classes.FeaturedBlogCardItem}>
        <CardMedia image={props.item.image} title={'Thumbnail'}>
            <CardActionArea className={classes.Overlay}>
                <CardContent className={classes.CardContent}>
                    <Typography component="h2" variant="h3" className={classes.Header}>
                        {props.item.title}
                    </Typography>
                    <Typography variant="h5" className={classes.Desc}>
                        {createDescription(props.item.summary, 120)}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.ContinueReadingText}>
                        Continue reading...
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardMedia>
    </Card>
)

featuredBlogItem.propTypes = {
    item: PropTypes.shape({
        date: PropTypes.any,
        title: PropTypes.string,
        summary: PropTypes.string,
        image: PropTypes.string
    })
}

export default featuredBlogItem;