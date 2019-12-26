import queryString from 'query-string';
import _ from 'lodash';

const index = {
  /**
   * Naver Cloud Platform 의 Cloud Functions 에서 실행되는 함수에서 받은 변수 params 를 파싱하는 함수
   * @param params
   * @returns {{headers: *, query: ParsedQuery, body: *}}
   */
  parseParams(params) {
    const body = params.__ow_body;
    const headers = params.__ow_headers;
    const method = params.__ow_method;
    const path = params.__ow_path;
    const query = queryString.parse(params.__ow_query);

    return {
      body,
      headers,
      method,
      path,
      query,
    }
  },
};

module.exports = index;
