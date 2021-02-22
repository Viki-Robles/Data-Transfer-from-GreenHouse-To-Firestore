import DfFirebase from "./firebase";
import DfGreenhouse from './dfGreenhouse';


async function main() {
    const dfFirebase = new DfFirebase();
    const dfGreenhouse = new DfGreenhouse();
    dfFirebase.initialize();

   
    const candidatesDatafromGH = await dfGreenhouse.getGreenhouseData();
    const candidatesDataId = candidatesDatafromGH.data
   
        for(let key in candidatesDataId) {
            const candidateId = candidatesDataId[key].id;
            dfFirebase.post({
                flowers: candidateId
            })
        }    
   
}
    main();

    