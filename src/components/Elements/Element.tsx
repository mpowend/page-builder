import { elementType } from '@/types/pagebuilder'
import ButtonElement, { ButtonElementProps } from './ButtonElement'
import TextElement, { TextElementProps } from './TextElement'

interface ElementRowProps extends TextElementProps, ButtonElementProps {
  type: elementType
}

function GeneralElement({ type, ...data }: ElementRowProps) {
  switch (type) {
    case 'text':
      return <TextElement {...data} />
    case 'button':
      return <ButtonElement {...data} />
    default:
      return <div>Not implemented</div>
  }
}

export default GeneralElement
