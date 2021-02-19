import axios, {AxiosResponse} from "axios";

const greenhouseAuth = 'Basic NGMyYTQwN2I4OWRjNjhlNzk2NThiNGMyYjMxNmZmNDMtMzo=';
const greenhouseUrl = 'https://harvest.greenhouse.io';


export default class DfGreenhouse {
  
    async  getGreenhouseData(): Promise<AxiosResponse<any>> {
      return axios.get(`${greenhouseUrl}/v1/candidates?per_page=500`, {
        headers: {
          Authorization: greenhouseAuth
        }
      });
    }
}