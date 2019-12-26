import queryString from 'query-string';
import _ from 'lodash';

const index = {
  parseParams(params) {
    const headers = params.__ow_headers;
    const query = queryString.parse(params.__ow_query);

    return {
      headers,
      query,
    }
  },
};

module.exports = index;
