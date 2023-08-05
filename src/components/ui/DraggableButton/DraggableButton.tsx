import { useDrag } from 'react-dnd'

interface DraggableButtonProps {
  children: React.ReactNode
  type: string
}

export default function DraggableButton({
  children,
  type,
}: DraggableButtonProps) {
  const [, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'template-button',
    item: () => ({ type }),
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  return (
    <div ref={dragPreview}>
      {/* <TextElement
        ref={dragPreview}
        className={classNames(isDragging && 'block', !isDragging && 'hidden')}
      /> */}
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div role="Handle" ref={drag}>
        {children}
      </div>
    </div>
  )
}
