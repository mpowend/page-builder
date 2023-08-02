import { RootState } from '@/features/pagebuilder/store'

export interface element {
  id: number
  type: string
  settings: Record<string, number | string>
}

export type attribute = 'text' | 'select'

export interface buttonType extends element {
  settings: {
    text: string
    link: string
    alignH: string
    alignV: string
    color: string
    bgColor: string
    rounded: number
    margin: number
    padding: number
    size: string
    width: string
  }
}

export interface textType extends element {
  settings: {
    text: string
    alignH: string
    alignV: string
    color: string
    fontSize: number
    lineHeight: number
    margin: number
    padding: number
    link: string
  }
}
export type rootToElementSelector = (state: RootState) => element
export interface test extends element {
  settings: {
    text: string
    select: string
  }
}

export interface page {
  lastID: number
  alignH: string
  alignV: string
  colSpace: number
  margin: number
  padding: number
  rounded: number
  colCount: number
  elements: element[]
  activeIndex: number
}
