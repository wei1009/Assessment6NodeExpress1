const fs = require('fs');
const process = require('process');
const axios = require('axios');
const fileName = process.argv[2];

async function processEach(arr) {
    for (url of arr) {

        shortUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];

        try {
            siteContents = await axios.get(url)
            siteContents = siteContents.data;

            fs.writeFile(`./${shortUrl}`, siteContents, "utf8", function (err) {
                if (err) {
                    console.error(`${shortUrl} File not written:  Error: ${err}\n\r`);
                }
            })
            console.log(`Wrote to ${shortUrl}`)
        } catch (err) {
            console.error(`Couldn't download: ${err}`);
        }
    }
}

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    let lines = [];
    data.split(/\r?\n/).forEach(line => {
        lines.push(line);
    });

    results = processEach(lines);
});
