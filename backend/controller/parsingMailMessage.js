//

function ParseBlock(block) {
  let html = ''
  block.forEach(element => {
    switch (element.type) {
      case 'paragraph':
        html += `<p>${element.data.text}</p>`
        break
      case 'header':
        html += `<h${element.data.level}>${element.data.text}</h${element.data.level}>`
        break
      case 'list':
        html += element.data.style === 'ordered' ? '<ol>' : '<ul>'
        element.data.items.forEach(item => {
          html += `<li>${item}</li>`
        })
        html += element.data.style === 'ordered' ? '</ol>' : '</ul>'
        break
      case 'table':
        html += '<table>'
        if (element.data.withHeadings) {
          html += '<thead><tr>'
          element.data.content[0].forEach(heading => {
            html += `<th>${heading}</th>`
          })
          html += '</tr></thead>'
          element.data.content.shift()
        }
        html += '<tbody>'
        element.data.content.forEach(row => {
          html += '<tr>'
          row.forEach(cell => {
            html += `<td>${cell}</td>`
          })
          html += '</tr>'
        })
        html += '</tbody></table>'
        break
      case 'quote':
        html += `<blockquote><p>${element.data.text}</p><footer>${element.data.caption}</footer></blockquote>`
        break
      default:
        break
    }
  })
  return html
}

module.exports = ParseBlock

// function createEmailComponent(block: Block) {
//   // Check the type of the block
//   switch (block.type) {
//     case 'header':
//       return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
//     case 'paragraph':
//       return `<p  style="font-size: 16px; line-height: 1.5; color: #666" >${block.data.text}</p>`
//     case 'list':
//       const listItems = block.data
//         .items!.map(item => `<li>${item}</li>`)
//         .join('')
//       return `<ul>${listItems}</ul>`
//     // case 'image':
//     //   return `<img src="${block.data.src}" alt="${block.data.alt || ''}" />`

//     // You can add more cases for other block types as needed
//     default:
//       return ''
//   }
// }
