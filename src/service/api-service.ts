import { HTTP } from '@awesome-cordova-plugins/http/ngx';

export default class ApiService {

    private API_URL = 'https://635c1d30fc2595be2640f3f3.mockapi.io/';

    constructor(public http: HTTP) { }
    
    chamarDailyFactor() {
        return new Promise((resolve, reject) => {

            const url = this.API_URL + 'DailyFactor';
      
            this.http.get(url, {}, {})
              .then((result: any) => {
                resolve(result.json());
              },
              (error) => {
                reject(error.json());
              });
          });
    }
}
