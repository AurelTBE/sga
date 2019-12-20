import { combineReducers } from 'redux';
import { authReducer, authError} from './authReducer';
import { homeTabReducer, gfTabReducer, sgaTabReducer, resulTabReducer, mediaTabReducer, jugesTabReducer, archivesTabReducer, audioPlayReducer, notifPermReducer, loadingReducer } from './navReducer';
import { homeContentReducer, sgaContentReducer, gfContentReducer, jugContentReducer, archivesContentReducer, currentActuReducer, currentResultReducer, galContentReducer, vidPlayReducer, mediathequeReducer, calendarReducer, resultsBoxReducer } from './contentReducer';

const rootReducer = combineReducers({
    authentication: authReducer,
    activhometab: homeTabReducer,
    activgftab: gfTabReducer,
    activsgatab: sgaTabReducer,
    activresultab: resulTabReducer,
    activmediatab: mediaTabReducer,
    activjugestab: jugesTabReducer,
    activarchivestab: archivesTabReducer,
    homecontent: homeContentReducer,
    sgacontent: sgaContentReducer,
    gfcontent: gfContentReducer,
    jugescontent: jugContentReducer,
    archivescontent: archivesContentReducer,
    currentactu: currentActuReducer,
    currentresult: currentResultReducer,
    galeriecontent: galContentReducer,
    vidplay: vidPlayReducer,
    audioprogress: audioPlayReducer,
    mediatheque: mediathequeReducer,
    calendarevents: calendarReducer,
    resultsbox: resultsBoxReducer,
    autherror: authError,
    notifperm: notifPermReducer,
    loadingstate: loadingReducer,
});

export default rootReducer;