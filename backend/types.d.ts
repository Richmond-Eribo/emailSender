export interface Block {
  id: string
  type: 'paragraph' | 'header' | 'list' | 'table' | 'quote'
  data: {
    text?: string
    level?: number
    style?: 'ordered' | 'unordered'
    items?: string[]
    withHeadings?: boolean
    content?: string[][]
    caption?: string
    alignment?: 'left' | 'center' | 'right'
  }
}
