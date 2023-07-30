import { useDispatch, useSelector } from 'react-redux'
import { addPage, updatePage, RootState } from '@/features/pagebuilder/store'

import { useEffect } from 'react'
import { element, test } from '@/types/pagebuilder'

export interface TextRowProps {
  title: string
  placeholder?: string
  value?: string
  index: number
  state(st: RootState): element
}
export default function TextRow({
  title,
  placeholder,
  index,
  state,
}: TextRowProps) {
  const data = useSelector(state) as test
  console.log(data)

  const dispatch = useDispatch()

  useEffect(() => {
    const d: test = {
      id: index,
      type: 'text',
      settings: {
        text: 'عنوان',
      },
    }
    if (!data) dispatch(addPage(d))
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
          dispatch(
            updatePage(index, { ...data, settings: { text: e.target.value } })
          )
        }}
      />
    </div>
  )
}
