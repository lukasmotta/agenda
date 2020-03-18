import services from './modules'
import axios from 'axios'

const http = new Object
console.log('servies http', services)
for (const namespaced in services) {
    for (const key in services[namespaced]) {
        console.log('segundo dor funcito', key)
        if (key != 'namespaced') http[namespaced + key] = data => { axios[services[namespaced][key].method](services[namespaced][key].router, data) }
    }
}

export default http







