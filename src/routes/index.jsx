import LandingPage from "../pages/landing"
import LoginPage from "../pages/login"

const publicRoutes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage }
]

export default publicRoutes
