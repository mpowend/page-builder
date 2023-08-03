import TestSetting from './SettingViews/TestSetting/TestSetting'

interface SettingWidgetProps {
  element: 'test' | 'button'
}

export default function SettingWidget({ element }: SettingWidgetProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="mb-2 font-bold">تنظیمات صفحه</div>
      {(() => {
        switch (element) {
          case 'test':
            return <TestSetting json={element} index={0} />
          default:
            return <div>not found</div>
        }
      })()}
      {/* <div className="page-options-option">
        <span className="flex items-center">فاصله بین فریم ها</span>
        <select className="p-1 pl-3 border border-gray-200 rounded-md">
          {[
            { name: 'پیش فرض', value: 1 },
            { name: '2', value: 2 },
            { name: '3', value: 3 },
            { name: '4', value: 4 },
          ].map(({ name, value }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="page-options-option">
        <span className="flex items-center">حاشیه</span>
        <input
          className="w-8 p-1 text-center border border-gray-200 rounded-md ltr"
          type="text"
          placeholder="12"
        />
      </div>
      <div className="page-options-option">
        <span className="flex items-center">فاصله از دیواره</span>
        <input
          className="w-8 p-1 text-center border border-gray-200 rounded-md ltr"
          type="text"
          placeholder="24"
        />
      </div> */}
    </div>
  )
}
