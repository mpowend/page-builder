export interface element {
  id: number
  type: string
  settings: object
}

export interface button extends element {
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

export interface test extends element {
  settings: {
    text: string
  }
}

export interface page {
  alignH: string
  alignV: string
  colSpace: number
  margin: number
  padding: number
  rounded: number
  colCount: number
  elements: element[]
}
