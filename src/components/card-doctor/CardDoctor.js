import React from 'react'
import HTMLReactParser from 'html-react-parser'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	},
	details: {
	  display: 'flex',
	  flexDirection: 'column',
	},
	content: {
	  flex: '1 1 auto',
	},
	cover: {
	  width: 320,
	},
	
	
  }));
  
const CardDoctor = ({data}) => {
	const classes = useStyles();
	return (
		<div className="card">
		<Card className={classes.root}>
		<CardMedia
				className={classes.cover}
				image={data.photo && data.photo.formats.thumbnail}
				title="Live from space album cover"
			/>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h5" variant="h5">
						<b>{data && data.name}</b>
					</Typography>
					<p>
						<small>{data && data.specialization.name}</small>
						<span>/</span>
						<small>{data && data.hospital[0].name}</small>
					</p>
					<p>
						{HTMLReactParser(data.about)}
					</p>
					<p>
						{data.price.formatted}
					</p>
				</CardContent>
			</div>
		
		</Card>
	</div>
	)
}

export default CardDoctor
