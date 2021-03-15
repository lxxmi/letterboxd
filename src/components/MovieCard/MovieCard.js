import React from 'react'
import { Badge, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { img_300, unavailable } from './../../config/config';
import useStyles from './styles'

export const MovieCard = ({id, poster, title, date, media_type, vote_avg}) => {
    const {card, cardContent, cardTitle, subtitle, badge} = useStyles()
    return (
        <div>
            <Card className={card}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={title}
                    image={poster ? `${img_300}/${poster}`:unavailable}
                    title={title}
                    />
                    <Badge
                     className={badge} color='secondary' 
                     badgeContent={vote_avg} overlap='circle' anchorOrigin={{vertical: 'bottom',horizontal: 'left',}}>
                    </Badge>
                    <CardContent className={cardContent}>
                        <Typography className={cardTitle} variant="h6" component="h2">
                            {title}
                        </Typography>
                        <Typography className={subtitle} variant="body2" color="textSecondary" component="p">
                            {date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}
