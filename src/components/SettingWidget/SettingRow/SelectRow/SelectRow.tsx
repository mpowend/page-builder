import { updateElement } from '@/features/pagebuilder/store'
import { rootToElementSelector, test } from '@/types/pagebuilder'
import { useDispatch, useSelector } from 'react-redux'

export interface SelectRowProps {
  title: string
  values: string[]
  state: rootToElementSelector
  index: number
  propName: keyof test['settings']
}

export default function SelectRow({
  title,
  values = [],
  state,
  propName,
}: SelectRowProps) {
  const data = useSelector(state) as test
  const dispatch = useDispatch()
  return (
    <div className="page-options-option">
      <span className="flex items-center">{title}</span>
      <select
        defaultValue={data?.settings[propName]}
        className="rounded-md border border-gray-200 p-1 pl-3"
        onChange={e => dispatch(updateElement(propName, e.target.value))}
      >
        {values.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}
