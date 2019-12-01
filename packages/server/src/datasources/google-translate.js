import RESTDataSource from 'apollo-datasource-rest';

const GOOGLE_API_VERSION = 3;
const GOOGLE_PROJECT_NUMBER = '239462248723';

class GoogleTranslate extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://translation.googleapis.com';
  }

  async detectLanguage() {
    const response = await this.get('language');
    return Array.isArray(response)
      ? response.map(launch => this.launchReducer(launch))
      : [];
  }
}

export default GoogleTranslate;