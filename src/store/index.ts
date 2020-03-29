import { STORE_CONFIG, STORE_ARTICLE, STORE_TAG, STORE_PROJECT, STORE_COUNTER } from '../constants/index'
import { ArticleStore } from './article';
import configStore from './config';
import tagStore from './tag';
import{ ProjectStore } from './project';
import counterStore from './counter';
const projectStore = new ProjectStore()
const articleStore = new ArticleStore()
const store = {
    [STORE_COUNTER]: counterStore,
    [STORE_ARTICLE]: articleStore,
    [STORE_CONFIG]: configStore,
    [STORE_TAG]: tagStore,
    [STORE_PROJECT]: projectStore,
}

export default store
export {
    ProjectStore,
    ArticleStore
}
