export default [


    {
        path: '/home',
        name: 'home',
        component: ()=> import('./pages/Home')
    },

    {
        path: '/',
        name: 'about',
        component: ()=> import('./pages/About')
    }
]