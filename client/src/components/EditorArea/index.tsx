/* eslint-disable @typescript-eslint/no-explicit-any */
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

import {useEffect, useRef, forwardRef} from 'react'
import {SimpleImage} from './blockClasses'
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

  const saveEditor = () => {
    editorState.current.save().then((output: iEditorData) => {
      Props.storeEditorData(output)
    })
  }

  return (
    <>
      <div id='editorjs' className='w-full p-5 editor-holder'></div>
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
