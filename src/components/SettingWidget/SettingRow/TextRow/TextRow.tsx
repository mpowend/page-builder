import { useDispatch, useSelector } from 'react-redux'
import { addPage, updatePage } from '@/features/pagebuilder/store'

import { useEffect } from 'react'
import { rootToElementSelector, test } from '@/types/pagebuilder'

export interface TextRowProps {
  title: string
  placeholder?: string
  index: number
  state: rootToElementSelector
  propName: keyof test['settings']
}
export default function TextRow({
  title,
  placeholder,
  index,
  state,
  propName,
}: TextRowProps) {
  const data = useSelector(state) as test
  const dispatch = useDispatch()

  useEffect(() => {
    const d: test = {
      id: index,
      type: 'text',
      settings: {
        text: 'عنوان',
        select: '',
      },
    }
    if (!data?.settings) dispatch(addPage(d))
  })
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="rtl w-full p-2">{title}</div>
      <input
        type="text"
        className="ltr w-full rounded-md border border-gray-200 p-1"
        placeholder={placeholder}
        value={data ? data.settings.text : ''}
        onChange={e => {
          dispatch(updatePage(propName, e.target.value))
        }}
      />
    </div>
  )
}
