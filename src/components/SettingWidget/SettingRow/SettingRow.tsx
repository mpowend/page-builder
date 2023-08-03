import TextRow, { TextRowProps } from './TextRow'
import SelectRow, { SelectRowProps } from './SelectRow'
import { AlignRowProps } from './AlignRow'
import AlignRow from './AlignRow/AlignRow'

interface SettingRowProps {
  type: 'text' | 'select' | 'number' | 'color' | 'align'
  data: TextRowProps | SelectRowProps | AlignRowProps
}

export default function SettingRow({ type, data }: SettingRowProps) {
  switch (type) {
    case 'text':
      return <TextRow {...(data as TextRowProps)} />
    case 'select':
      return <SelectRow {...(data as SelectRowProps)} />
    case 'align':
      return <AlignRow {...(data as AlignRowProps)} />
    default:
      return <div>Not implemented</div>
  }
}
