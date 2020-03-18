export default {

    Login:        { method: 'post', router: 'auth/login'  },
    Logout:       { method: 'post', router: 'auth/logout',data:'data'},
    ResetPassword:  { method: 'put' , router: 'auth/store'},
    namespaced: true
}