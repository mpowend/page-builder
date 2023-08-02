import ButtonElement, {
  ButtonElementProps,
} from './ButtonElement/ButtonElement'
import TextElement, { TextElementProps } from './TextElement/TextElement'

interface ElementRowProps {
  type: 'text' | 'button' | 'card' | 'picture' | 'video' | 'slider' | 'icon'
  data: TextElementProps | ButtonElementProps
}

function GeneralElement({ type, data }: ElementRowProps) {
  switch (type) {
    case 'text':
      return <TextElement {...(data as TextElementProps)} />
    case 'button':
      return <ButtonElement {...(data as ButtonElementProps)} />
    default:
      return <div>Not implemented</div>
  }
}

export default GeneralElement
