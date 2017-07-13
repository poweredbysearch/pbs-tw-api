import _ from 'lodash';
import Promise from 'bluebird';
import request from 'request';
import teamwork from './teamwork';

const apiRequestProto = {

    get hostname () {
        return teamwork.config.domain + '.teamwork.com';
    },

    get baseUrl () {
        return 'https://' + this.hostname;
    },

    get config () {
        return Object.assign({
            encoding: 'utf8',
            followRedirect: true,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Basic ' + new Buffer(teamwork.config.apiKey + ':').toString('base64')
            },
            hostname: this.hostname,
            baseUrl: this.baseUrl
        }, this.opts);
    },

    exec () {
        return new Promise(this.doRequest.bind(this));
    },

    doRequest (resolve, reject) {
        let requestConfig = this.config;

        // append json extension
        requestConfig.uri = requestConfig.uri + '.json';

        request(requestConfig, (error, response, json) => {
            let paging = undefined;

            if (error) {
                reject(error);
            } else if (response.statusCode >= 200 && response.statusCode < 300) {
                if (typeof json === 'string') {
                    json = JSON.parse(json);
                }
                
                _.forEach(['x-page', 'x-pages', 'x-records'], function(n) {

                    if (typeof response.headers[n] !== 'undefined') {
                        if (typeof paging === 'undefined') paging = {};

                        paging[n.slice(2)] = response.headers[n];
                    }
                })
                
                resolve({json, paging});
            } else {
                reject({
                    code: response.statusCode,
                    message: response.statusMessage
                });
            }
        });
    }
};

export default apiRequestProto;

/**
 * Factory function for API request objects
 *
 * @param  {Object}   opts Request options
 * @return {Promise}
 */
export function createApiRequest () {
    let requestObject = Object.create(apiRequestProto);
    return requestObject;
}

/**
 * Function for API requests
 *
 * @param  {Object}   opts Request options
 * @return {Promise}
 */
export function apiRequest (opts) {
    let requestObject = Object.assign(createApiRequest(), {opts});
    return requestObject.exec();
}
