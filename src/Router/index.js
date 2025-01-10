import {HeaderOnly} from '~/component/Layout'

import Home from '~/pages/Home'
import Follwing from '~/pages/Following'
import Upload from '~/pages/Upload'

export const publicRoutes = [
    {path : "/", component: Home},
    {path: "/following", component :Follwing},
    {path: "/upload", component :Upload, Layout : HeaderOnly},
]


export const privateRoutes = []