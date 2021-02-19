import DfFirebase from "./firebase";
import DfGreenhouse from './dfGreenhouse';

async function main() {
    const dfFirebase = new DfFirebase();
    const dfGreenhouse = new DfGreenhouse();
    dfFirebase.initialize();

   
    const candidatesData = await dfGreenhouse.getGreenhouseData();
    const data = candidatesData.data
   
        for(let key in data) {
            const candidateId = data[key].id;
            dfFirebase.post({
                flowers: candidateId
            })
        }
    
}
    main();

    