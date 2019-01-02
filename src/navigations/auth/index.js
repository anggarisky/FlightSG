import { createStackNavigator } from 'react-navigation'
import { createAppContainer } from '@react-navigation/native'
import Login from './../../screens/login'
import Chataylogin from './../../screens/chataylogin'
import Chatayflightselect from './../../screens/chatayflightselect'
import Chatayflightselected from './../../screens/chatayflightselected'
import Chatayflighthomes from './../../screens/chatayflighthomes'
import Chatayflighthomesdept from './../../screens/chatayflighthomesdept'
import Chatayarrivaltiming from './../../screens/chatayarrivaltiming'
import Chatayarrivalstaff from './../../screens/chatayarrivalstaff'
import Chatayarrivalfis from './../../screens/chatayarrivalfis'
import Chatayarrivalcontact from './../../screens/chatayarrivalcontact'
import Chatayarrivalclose from './../../screens/chatayarrivalclose'



import Chataydeptdelay from './../../screens/chataydeptdelay'
import Chatayfisdept from './../../screens/chatayfisdept'
import Chataystaffdept from './../../screens/chataystaffdept'
import Chataycontactdept from './../../screens/chataycontactdept'
import Chatayclosedept from './../../screens/chatayclosedept'
import Chataydepttiming from './../../screens/chataydepttiming'

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
	Chatayarrivaltiming: {
		screen: Chatayarrivaltiming,
		navigationOptions: {
			header: null
		}
	},
	Chatayarrivalstaff: {
		screen: Chatayarrivalstaff,
		navigationOptions: {
			header: null
		}
	},
	Chatayarrivalfis: {
		screen: Chatayarrivalfis,
		navigationOptions: {
			header: null
		}
	},
	Chatayarrivalcontact: {
		screen: Chatayarrivalcontact,
		navigationOptions: {
			header: null
		}
	},
	Chatayarrivalclose: {
		screen: Chatayarrivalclose,
		navigationOptions: {
			header: null
		}
	},
	Chataydeptdelay: {
		screen: Chataydeptdelay,
		navigationOptions: {
			header: null
		}
	},



	Chatayfisdept: {
		screen: Chatayfisdept,
		navigationOptions: {
			header: null
		}
	},
	Chataystaffdept: {
		screen: Chataystaffdept,
		navigationOptions: {
			header: null
		}
	},
	Chataycontactdept: {
		screen: Chataycontactdept,
		navigationOptions: {
			header: null
		}
	},
	Chatayclosedept: {
		screen: Chatayclosedept,
		navigationOptions: {
			header: null
		}
	},
	Chataydepttiming: {
		screen: Chataydepttiming,
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