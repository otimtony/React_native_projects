import React, { Component } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import { getAdvertisementAction } from '../actions/getAdvertisementAction';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get("screen");

class AdvertisementDetail extends Component{
	componentDidMount(){
		this.props.getAdvertisementAction(this.props.navigation.state.params.id)
	}
	render(){

		let dimensions = Dimensions.get("window");
		let imageHeight = Math.round((dimensions.width * 9)/16);

		let imageWidth = dimensions.width;

		return (
			<View style={styles.container}>
			{
				this.props.advertisement &&
				<View>
					<Image 
                      	style={{ height: imageHeight, width: imageWidth }}
                      	resizeMode={"cover"}
                      	source={{ uri: this.props.advertisement.image }} />
					<Text style={styles.title}>{this.props.advertisement.title}</Text>
					<Text style={styles.descriptionHeading}>Description</Text>
					<Text style={styles.description}>{this.props.advertisement.description}</Text>
				</View>
			}
			</View>
		)
	}
}

function mapStateToProps (state) {
  	return {
  		advertisement: state.advertisementsReducer.advertisement
  	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		marginTop: 10,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: "bold",
	},
	descriptionHeading: {
		marginLeft: 10,
		marginRight: 10,
		fontWeight: 'bold',
	},
	description: {
		marginLeft: 10,
		marginRight: 10
	}
})

export default connect(mapStateToProps, {getAdvertisementAction})(AdvertisementDetail);