import {useContent} from '../hooks'
export default function Browse() {
    const {series} = useContent('series')
    return <p>Hello from Browse!</p>
}