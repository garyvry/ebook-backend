const EPub = require('epub')

const parse = (path) => {
  console.log('epub parse: ' + path)

  var epub = new EPub(path)

  epub.on('end', function () {
    // epub is now usable
    console.log(epub.metadata)
    // epub.getChapter('chapter_id', function (err, text) {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log(text)
    //   }
    // })
  })
  epub.parse()
}

parse('./src/books/Kubernetes_Up_and_Running.epub')

// module.exports = {
//   parse
// }
