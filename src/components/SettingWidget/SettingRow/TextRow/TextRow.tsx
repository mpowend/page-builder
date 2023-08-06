import { useDispatch, useSelector } from 'react-redux'
import { updateElement } from '@/features/pagebuilder/store'

import { rootToElementSelector, test } from '@/types/pagebuilder'
import classNames from 'classnames'

export interface TextRowProps {
  title: string
  placeholder?: string
  index: number
  state: rootToElementSelector
  propName: keyof test['settings']
  lines?: number
}
export default function TextRow({
  title,
  placeholder,
  state,
  propName,
  lines,
}: TextRowProps) {
  const data = useSelector(state) as test
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const d: test = {
  //     id: index,
  //     type: 'text',
  //     settings: {
  //       text: 'عنوان',
  //       select: '',
  //     },
  //   }
  //   if (!data?.settings) dispatch(addElement(d))
  // })
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="rtl w-full p-2">{title}</div>
      <textarea
        className={classNames(
          'ltr w-full rounded-md border border-gray-200 p-1',
          lines && 'whitespace-nowrap overflow-x-scroll'
        )}
        rows={lines ?? 1}
        onInput={e => {
          (e.target as HTMLInputElement).value = (
            e.target as HTMLInputElement
          ).value.replace(/\n/g, '')
        }}
        placeholder={placeholder}
        value={data ? data.settings.text : ''}
        onChange={e => {
          dispatch(updateElement(propName, e.target.value))
        }}
      />
    </div>
  )
}
