import { StatusBar, StatusBarStyle } from 'expo-status-bar'
import { Home} from './src/screens/home/Index'

export default function App() {
    return(
        <>
            <StatusBar translucent backgroundColor='white'/>
            <Home />
        </>
    )
}