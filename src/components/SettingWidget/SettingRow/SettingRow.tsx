import TextRow, { TextRowProps } from './TextRow'
import SelectRow, { SelectRowProps } from './SelectRow'

interface SettingRowProps {
  type: 'text' | 'select' | 'number' | 'color' | 'align'
  value: TextRowProps | SelectRowProps
}

export default function SettingRow({ type, value }: SettingRowProps) {
  switch (type) {
    case 'text':
      return <TextRow {...value} />
    case 'select':
      return <SelectRow {...value} />
    default:
      return <div>Not implemented</div>
  }
}
