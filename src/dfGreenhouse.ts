import axios, {AxiosResponse} from "axios";

const greenhouseAuth = 'Basic ';
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
