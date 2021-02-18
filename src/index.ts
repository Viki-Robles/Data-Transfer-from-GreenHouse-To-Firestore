import DfFirebase from "./firebase";
// import App from "./firebase";


function main() {
    const app = new DfFirebase();
    app.initialize();
    app.post({
        flowers:'strawberry'
    });
    console.log("done");
}

main();
