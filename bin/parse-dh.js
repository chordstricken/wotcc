var fs      = require('fs');
var cheerio = require('cheerio');

var book = 'book-11';

var $ = cheerio.load(fs.readFileSync(book + '.html'));

// character: [chapter, chapter, chapter]
var charData = {};

var chapter = 'Prelude';
$('li').each(function(i, e) {
    var $li  = $(this),
        name = $li.find('.name').text(),
        id   = name.replace(/[^\w\d]+/g, '-'),
        info = $li.text();

    if (!charData[id]) charData[id] = {
        id: id,
        name: name,
        chapters: [],
    };
    charData[id].chapters.push({
        title: chapter,
        info:  info,
    });

    var $h3 = $li.find('h3');
    if ($h3.length)
        chapter = $h3.text();

});

var dataDir = '../www/data/' + book;

try {
    fs.mkdirSync(dataDir);

} catch (e) {
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
