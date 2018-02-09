import Home from './pages/Home';
import Users from './pages/Users';

export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: Users,
        path: '/users',
        exact: true
    }
]