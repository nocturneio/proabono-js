import axios from 'axios';

export default class ProAbonoAPI {

  _endpoint: string;
  _url: string;
  _parameters: any;

  /**
   * Create an request easily to the ProAbono API
   *
   * @param url API Endpoint
   * @param endpoint
   */
  constructor(url, endpoint) {
    this._headers = {
      'Content-Type' : 'application/json'
    };
    this._parameters = {};
    this._endpoint = endpoint;

    if (url === '') throw new Error('Please specify an url to api endpoint.');
    this._url = this._endpoint + this._url;
  }

  /**
   * Create a Request staticly.
   *
   * @param url API endpoint
   * @param endpoint
   * @returns {ProAbonoAPI}
   */
  static url(endpoint, url) {
    return new ProAbonoAPI(url, endpoint);
  }

  contentJson() {
    this._headers['Content-Type'] = 'application/json';
    return this;
  }

  contentURL() {
    this._headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return this;
  }

  /**
   * Add headers to the request.
   *
   * @param object Request headers in object format.
   */
  headers(object) {
    this._headers = {...this._headers, ...object};
    return this;
  }

  needAuth(authorization) {
    this._headers = {...this._headers, 'Authorization': 'Basic ' + authorization};
    return this;
  }

  /**
   * Add parameters to the request.
   *
   * @param object Request headers in object format.
   */
  parameters(object) {
    this._parameters = {...this._parameters, ...object};
    return this;
  }

  /**
   * Execute post request.
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  post() {
    return axios.post(this._url, JSON.stringify(this._parameters), {headers: {...this._headers}});
  }

  /**
   * Execute post request.
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  put() {
    return axios.put(this._url, JSON.stringify(this._parameters), {headers: {...this._headers}});
  }

  /**
   * Execute patch request.
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  patch() {
    return axios.patch(this._url, JSON.stringify(this._parameters), {headers: {...this._headers}});
  }

  /**
   * Execute delete request.
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  delete() {
    return axios.delete(this._url, {headers: {...this._headers}});
  }

  /**
   * Execute get request.
   *
   * @returns {Promise<AxiosResponse<T>>}
   */
  get() {
    const params = this._parameters;
    const headers = this._headers;

    let request = {params, headers};
    return axios.get(this._url, request);
  }
}
