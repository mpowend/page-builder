import Button from '@/components/ui/Button'
import DraggableButton from '../ui/DraggableButton/DraggableButton'

interface TemplatesWidgetProps {
  options: { title: string; type: string }[]
}

export default function TemplatesWidget({ options }: TemplatesWidgetProps) {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="mb-2 font-bold">قالب ها</div>
      {options.map(item => (
        <DraggableButton key={item.title} type={item.type}>
          <Button className="p-2">{item.title}</Button>
        </DraggableButton>
      ))}
    </div>
  )
}
