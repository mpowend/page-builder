import SettingRow from '../../SettingRow/SettingRow'

interface TestSettingProps {
  json: string
}

export default function TestSetting({ json }: TestSettingProps) {
  //   const data = JSON.parse(json)
  return (
    <SettingRow type="text" value={{ title: 'عنوان', value: 'data.title' }} />
  )
}
