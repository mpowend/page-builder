import React from 'react'
import classNames from 'classnames'

const TemplateButton = ({
  children,
  tooltip,
  className,
}: {
  children: React.ReactNode
  tooltip?: string
  className?: string
}) => (
  <button className={classNames('template-type group', className)}>
    {children}
    {!!tooltip && (
      <span className="transition-500 pointer-events-none absolute bottom-0 z-10 translate-y-1/2 rounded-lg bg-gray-900 p-1 text-white opacity-0 delay-300 group-hover:opacity-100">
        {tooltip}
      </span>
    )}
  </button>
)

export default TemplateButton
