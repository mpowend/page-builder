import SettingRow from '../../SettingRow/SettingRow'

interface TestSettingProps {
  json: string
  index: number
}

export default function TestSetting({ index }: TestSettingProps) {
  return (
    <>
      <SettingRow
        type="text"
        data={{
          index,
          title: 'عنوان',
          value: 'data.title',
          state: arg => arg.pagebuilder.elements[index],
        }}
      />
      <SettingRow
        type="select"
        data={{ index, values: ['1', '2', '3'], value: '1', title: 'انتخاب' }}
      />
    </>
  )
}
