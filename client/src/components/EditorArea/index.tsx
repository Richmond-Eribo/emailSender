import EditorJS from '@editorjs/editorjs'
// import header quote nested-list for editorjs
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
// import NestedList from '@editorjs/nested-list'
import List from '@editorjs/list'
// import Embed from '@editorjs/embed'
import Paragraph from '@editorjs/paragraph'
import Table from '@editorjs/table'
// import Marker from '@editorjs/marker'

import {useEffect, useRef} from 'react'
import {SimpleImage} from './blockClasses'

const EditorArea = () => {
  // create the editor
  const create = useRef(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorState = useRef<any>(null)

  useEffect(() => {
    if (create.current) {
      editorState.current = new EditorJS({
        holderId: 'editorjs',
        autofocus: true,
        tools: {
          image: SimpleImage,
          header: Header,
          paragraph: Paragraph,
          list: List,
          // marker: Marker,
          // embed: Embed,
          table: Table,
          quote: Quote,
        },
      })
    }
    create.current = false
  }, [create])

  return <div id='editorjs' className='editor-holder w-full   p-5'></div>
}

export default EditorArea

// editor.save().then( savedData => {
//     output.innerHTML = JSON.stringify(savedData, null, 4);
//   })
