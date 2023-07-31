import TextRow, { TextRowProps } from './TextRow'
import SelectRow, { SelectRowProps } from './SelectRow'

interface SettingRowProps {
  type: 'text' | 'select' | 'number' | 'color' | 'align'
  data: TextRowProps | SelectRowProps
}

export default function SettingRow({ type, data }: SettingRowProps) {
  switch (type) {
    case 'text':
      return <TextRow {...(data as TextRowProps)} />
    case 'select':
      return <SelectRow {...(data as SelectRowProps)} />
    default:
      return <div>Not implemented</div>
  }
}
