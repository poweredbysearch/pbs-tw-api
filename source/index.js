/** Teamwork modules */
import teamwork from './teamwork';

export default {

  /**
   * Your config should look like this
   *
   * @type {Object}
   *
   * let config = {
   *   apiKey: API_KEY
   *   domain: YOUR_TEAMWORK_SUBDOMAIN (found in http://YOUR_TEAMWORK_SUBDOMAIN.teamwork.com)
   * };
   */
	create (config = {}) {

    // Check that the config was passed before creating the object
    if (Object.is(undefined, config.apiKey) || Object.is(undefined, config.domain)) {
      return false;
    }

		return Object.assign(teamwork, {config});
	}

};
