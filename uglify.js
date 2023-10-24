const fs = require('node:fs')
const UglifyJS = require("uglify-js");

const path = {
    output : __dirname + '/dist/doll.min.js',
    input : __dirname +'/dist/doll.prod.js',
};

async function main () {

    await fs.readFile(path.input , 'utf-8' , function (err , data) {
        if (err) throw err
        const result = UglifyJS.minify(data);
        fs.writeFile(path.output , result.code , function (err) {

            if (err) throw err
            console.log("minify succesfully");

        });
    });

};
main();