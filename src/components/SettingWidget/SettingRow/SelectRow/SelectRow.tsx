export interface SelectRowProps {
  title: string
  value?: string
  values?: string[]
}

export default function SelectRow({
  title,
  value,
  values = [],
}: SelectRowProps) {
  return (
    <div className="page-options-option">
      <span className="flex items-center">{title}</span>
      <select
        className="rounded-md border border-gray-200 p-1 pl-3"
        value={value}
      >
        {values.map(name => (
          <option key={name}>{name}</option>
        ))}
      </select>
    </div>
  )
}
