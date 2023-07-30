export interface TextRowProps {
  title: string
  placeholder?: string
  value?: string
}

export default function TextRow({ title, placeholder, value }: TextRowProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="rtl w-full p-2">{title}</div>
      <input
        type="text"
        className="ltr w-full rounded-md border border-gray-200 p-1"
        placeholder={placeholder}
        value={value}
      />
    </div>
  )
}
