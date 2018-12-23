import { createStackNavigator } from 'react-navigation'
import { createAppContainer } from '@react-navigation/native'
import Login from './../../screens/login'
import Chataylogin from './../../screens/chataylogin'
import Chatayflightselect from './../../screens/chatayflightselect'
import Chatayflightselected from './../../screens/chatayflightselected'
import Chatayflighthomes from './../../screens/chatayflighthomes'
import Chatayflighthomesdept from './../../screens/chatayflighthomesdept'

const stackConfig = {
	Login: {
		screen: Login,
		navigationOptions: {
			header: null
		}
	},
	Chataylogin: {
		screen: Chataylogin,
		navigationOptions: {
			header: null
		}
	},
	Chatayflightselect: {
		screen: Chatayflightselect,
		navigationOptions: {
			header: null
		}
	},
	Chatayflightselected: {
		screen: Chatayflightselected,
		navigationOptions: {
			header: null
		}
	},
	Chatayflighthomes: {
		screen: Chatayflighthomes,
		navigationOptions: {
			header: null
		}
	},
	Chatayflighthomesdept: {
		screen: Chatayflighthomesdept,
		navigationOptions: {
			header: null
		}
	},
}

const AppNavigator = createStackNavigator(stackConfig, {
	initialRouteName: 'Login'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer