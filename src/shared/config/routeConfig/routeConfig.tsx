import {RouteProps} from "react-router-dom";
import NotFoundPage from "app/pages/NotFound/NotFoundPage";
import MainPage from "app/pages/MainPage/MainPage";


export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not-found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*'

}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    }
}