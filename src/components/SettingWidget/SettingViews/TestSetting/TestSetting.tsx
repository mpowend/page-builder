import { useCallback } from 'react'
import { rootToElementSelector } from '@/types/pagebuilder'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/pagebuilder/store'
import SettingRow from '../../SettingRow/SettingRow'

export default function TestSetting() {
  const activeIndex = useSelector(
    (state: RootState) => state.pagebuilder.activeIndex
  )
  const state = useCallback<rootToElementSelector>(
    arg => arg.pagebuilder.elements[activeIndex],
    [activeIndex]
  )
  return (
    <>
      <SettingRow
        type="align"
        data={{
          index: activeIndex,
          hStateSelector: state,
          vStateSelector: state,
        }}
      />
      <SettingRow
        type="text"
        data={{
          index: activeIndex,
          title: 'عنوان',
          state,
          propName: 'text',
        }}
      />
      <SettingRow
        type="select"
        data={{
          index: activeIndex,
          values: ['1', '2', '3'],
          title: 'انتخاب',
          propName: 'select',
          state,
        }}
      />
    </>
  )
}
