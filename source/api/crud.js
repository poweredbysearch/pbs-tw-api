import requestFns from './functions';

const crud = {

    /**
     * Find (get request)
     *
     * @param  {Object/Int} params Will look for a single record if int is passed
     * @return {Promise}           bluebird promise
     */
    find: function (params) {
        if (params === parseInt(params, 10)) {
            return requestFns.find(this.basePath + `/${params}`);
        }

        return requestFns.find(this.basePath, params);
    },

    create: function (data) {
        return requestFns.create(this.basePath, data);
    },

    update: function (id, data) {
        return requestFns.update(this.basePath + `/${id}`, data);
    },

    destroy: function (id) {
        return requestFns.destroy(this.basePath + `/${id}`);
    }

};

export default crud;
