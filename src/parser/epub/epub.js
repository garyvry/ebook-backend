const EPub = require('epub')

const scanDirectory = async (path, recurrsive) => {
  return new Promise(
    async (resolve, reject) => {
      console.log('scanDirectory')

      resolve({})
    }
  )
}

const parse = async path => {
  return new Promise(
    async (resolve, reject) => {
      console.log('epub parse: ' + path)
      var epub = new EPub(path)
      epub.on('end', () => {
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
      resolve({})
    }
  )
}

const getMetadata = async path => {
  return new Promise(
    async (resolve, reject) => {
      console.log('getMetadata: ' + path)
      var epub = new EPub(path)
      epub.on('end', () => {
        console.log(epub.metadata)
        resolve(epub.metadata)
      })
      epub.parse()
    }
  )
}

getMetadata('./src/books/Kubernetes_Up_and_Running.epub')

module.exports = {
  getMetadata,
  scanDirectory
}
