/* eslint-disable @typescript-eslint/no-explicit-any */
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import List from '@editorjs/list'
import Paragraph from '@editorjs/paragraph'
import Table from '@editorjs/table'
import Image from '@editorjs/image'
// import header quote nested-list for editorjs
// import NestedList from '@editorjs/nested-list'
// import Marker from '@editorjs/marker'
// import Embed from '@editorjs/embed'
// import {SimpleImage} from './blockClasses'

import {useEffect, useRef, forwardRef} from 'react'
import {iEditorData} from '../../types/interfaces'

type Props = {
  storeEditorData: (data: iEditorData) => void
}

const EditorArea = forwardRef<any, Props>((Props, ref) => {
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
          image: Image,
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a header',
              levels: [1, 2, 3, 4, 5],
              defaultLevel: 2,
            },
            shortcut: 'CMD+SHIFT+H',
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
              placeholder: 'Write something...',
              hidePlaceholderOnFocus: false,
            },
          },
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

  const saveEditor = () => {
    editorState.current.save().then((output: iEditorData) => {
      Props.storeEditorData(output)
      console.log(output)
    })
  }

  return (
    <>
      <div id='editorjs' className='w-full pb-0  p-5 editor-holder'></div>
      <button
        ref={ref}
        onClick={saveEditor}
        className='hidden'
        aria-label='save editor message'
      >
        save editor
      </button>
    </>
  )
})

export default EditorArea

// editor.save().then( savedData => {
//     output.innerHTML = JSON.stringify(savedData, null, 4);
//   })
