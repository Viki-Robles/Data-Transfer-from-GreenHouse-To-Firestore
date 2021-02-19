import DfFirebase from "./firebase";
import DfGreenhouse from './dfGreenhouse';

async function main() {
    const dfFirebase = new DfFirebase();
    const dfGreenhouse = new DfGreenhouse();
    dfFirebase.initialize();

   
    const dataResult = await dfGreenhouse.init();

    function isPostedtoDf(){
        for(let el of [dataResult]) {
            const data = dataResult[el];
                dfFirebase.post({
                    data:data
                });
            }
            console.log("done");
        }
        isPostedtoDf;
    }
    
    main();
    


// dfFirebase.post({
//     flowers:'strawberry'
// });
// console.log("done");
