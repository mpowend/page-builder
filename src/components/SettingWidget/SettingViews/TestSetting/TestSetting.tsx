import { useCallback } from 'react'
import { rootToElementSelector } from '@/types/pagebuilder'
import SettingRow from '../../SettingRow/SettingRow'

interface TestSettingProps {
  json: string
  index: number
}

export default function TestSetting({ index }: TestSettingProps) {
  const state = useCallback<rootToElementSelector>(
    arg => arg.pagebuilder.elements[index],
    [index]
  )
  return (
    <>
      <SettingRow
        type="text"
        data={{
          index,
          title: 'عنوان',
          state,
          propName: 'text',
        }}
      />
      <SettingRow
        type="select"
        data={{
          index,
          values: ['1', '2', '3'],
          title: 'انتخاب',
          propName: 'select',
          state,
        }}
      />
    </>
  )
}
