import { createStackNavigator } from 'react-navigation'
import { createAppContainer } from '@react-navigation/native'
import Login from './../../screens/login'
import Chataylogin from './../../screens/chataylogin'
import Chatayflightselect from './../../screens/chatayflightselect'
import Chatayflightselected from './../../screens/chatayflightselected'
import Chatayflighthomes from './../../screens/chatayflighthomes'

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
}

const AppNavigator = createStackNavigator(stackConfig, {
	initialRouteName: 'Chatayflighthomes'
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer