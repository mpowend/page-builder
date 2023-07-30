import React from 'react'

const TextInput = ({
  title,
  placeholder,
  pattern,
  Sub,
}: {
  title?: string
  placeholder?: string
  pattern?: string
  Sub?: React.JSX.Element
}) => (
  <div className="flex w-full flex-col gap-1">
    {!!title && (
      <label className="w-full font-normal text-neutral-800">{title}</label>
    )}
    <input
      type="text"
      placeholder={placeholder}
      pattern={pattern}
      className="placeholder: block w-full border-spacing-1 rounded-xl border-[1px] px-2 py-3 text-neutral-400 focus:outline-blue-600"
    />
    {Sub}
  </div>
)

export default TextInput
