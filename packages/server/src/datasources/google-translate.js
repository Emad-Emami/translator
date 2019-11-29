import RESTDataSource from 'apollo-datasource-rest';

const GOOGLE_API_VERSION = 3;
const GOOGLE_PROJECT_NUMBER = '671490363164';

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