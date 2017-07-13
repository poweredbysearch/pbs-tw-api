import {apiRequest} from '../apiRequest';

const requestFns = {

    /**
     * Return function attached to endpoints
     *
     * @param  {Object/Integer}   params [description]
     * @return {[type]}          [description]
     */
    find (path, params = null) {

        let opts = {
            uri: path,
            method: 'get',
            qs: params
        };

        return apiRequest(opts);
    },

    create (path, data = null) {
        let opts = {
            uri: path,
            method: 'post',
            json: data
        };

        return apiRequest(opts);
    },

    update (path, data = null) {
        let opts = {
            uri: path,
            method: 'put',
            json: data
        };

        return apiRequest(opts);
    },

    destroy (path) {
        let opts = {
            uri: path,
            method: 'delete'
        };

        return apiRequest(opts);
    }

};

export {requestFns as default};
