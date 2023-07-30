import Button from '@/components/ui/Button'

interface TemplatesWidgetProps {
  options: string[]
}

export default function TemplatesWidget({ options }: TemplatesWidgetProps) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="mb-2 font-bold">قالب ها</div>
      {options.map(text => (
        <Button key={text} className="p-2">
          {text}
        </Button>
      ))}
    </div>
  )
}
