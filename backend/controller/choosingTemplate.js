// read all the files in emailtemplate folder path
// and return a list of file names with extension .html in js
const fs = require('fs')
const path = require('path')

// the directory for the EMAIL TEMPLATES
const dirPath = '../emailTemplates'

// FUNCTION TO RETURN A LIST OF EMAILS
var results = []
function GetFileNames(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      let extname = path.extname(file)
      if (extname == '.js') {
        results.push({filename: file, fullpath: dir + '/' + file})
      }
    })
  } else {
    console.log('no such directory exists!')
  }
  console.log('results:', results)
  return results
}

console.log(GetFileNames(dirPath))

module.exports = GetFileNames(dirPath)
