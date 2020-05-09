var fs      = require('fs');
var path    = require('path');
var cheerio = require('cheerio');

/**
 * Parses the book HTML and saves it
 * @param book
 */
function parseBook(book) {
    console.log('Parsing', book);

    var bookPath = path.join(__dirname, book + '.html');
    var $        = cheerio.load(fs.readFileSync(bookPath));

    // character: [chapter, chapter, chapter]
    var charData = {};

    var chapter = 'Prelude';
    $('li').each(function(i, e) {
        var $li  = $(this),
            name = $li.find('.name').text(),
            id   = name.replace(/[^\w\d]+/g, '-');

        $li.find('img').remove();
        var $h3 = $li.find('h3').remove();

        if (!charData[id]) charData[id] = {
            id:       id,
            name:     name,
            chapters: [],
        };
        charData[id].chapters.push({
            title: chapter,
            info:  $li.html(),
        });

        if (id === 'Sevanna' && book === 'book-11')
            console.log($li.text());

        if ($h3.length)
            chapter = $h3.text();

    });

    var dataDir = path.join(__dirname, '../www/data/', book);

    try {
        fs.mkdirSync(dataDir);

    } catch (e) {
        if (e.code !== 'EEXIST')
            console.log(e.message);

    }

    // write index
    var index = Object.values(charData).reduce(function(data, char) {
        data[char.id] = char.name;
        return data;
    }, {});
    fs.writeFileSync(dataDir + '/index.json', JSON.stringify(index));

    // write each character file
    Object.values(charData).forEach(function(char) {
        fs.writeFileSync(dataDir + '/' + char.id + '.json', JSON.stringify(char));
    });
}


var books = [
    "book-00",
    "book-01",
    "book-02",
    "book-03",
    "book-04",
    "book-05",
    "book-06",
    "book-07",
    "book-08",
    "book-09",
    "book-10",
    "book-11",
    "book-12",
    "book-13",
    "book-14",
];

books.forEach(parseBook);
console.log('Done');