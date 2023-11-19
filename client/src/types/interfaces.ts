/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Irecipient {
  name: string
  email: string
  company: string
  role: string
}

export type TemplateKey = 'default' | 'colourful' | 'formal'

export type ColumnsKey = 'actions' | 'name' | 'role'
export interface iColumns {
  name: string
  key: ColumnsKey
}

interface Block {
  id: string
  type: string
  data: {
    text: string
    level?: number // This is optional as it's only present for "header" type
    style?: string // This is optional as it's only present for "list" type
    items?: string[] // This is optional as it's only present for "list" type
  }
}

export interface iEditorData {
  time: number
  blocks: Block[]
  version: string
}
