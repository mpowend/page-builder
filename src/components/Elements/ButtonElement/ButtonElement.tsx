import { hand, binYellow, pencilYellow } from '@/assets/icons/'
import classNames from 'classnames'
import { Identifier, XYCoord } from 'dnd-core'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

interface DragItem {
  index: number
  id: number
}
export interface ButtonElementProps extends DragItem {
  className?: string
  moveCard: (dragIndex: number, hoverIndex: number) => void
}
const ButtonElement = ({
  index,
  moveCard,
  id,
  className,
}: ButtonElementProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: 'BOX',
    // collect(monitor) {
    //   return {
    //     handlerId: monitor.getHandlerId(),
    //   }
    // },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: 'BOX',
    item: () => ({ id, index, type: 'button' }),
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))
  return (
    <div className={classNames('flex flex-col items-end', className)}>
      <div className="inline-flex h-8 w-24 items-center justify-center gap-3 rounded-t-xl rounded-bl-xl rounded-br-sm border border-orange-200 bg-white px-2">
        <div className="relative h-4 w-4">
          <img src={hand} />
        </div>
        <div className="relative h-4 w-4">
          <img src={binYellow} />
        </div>
        <div className="relative h-4 w-4">
          <img src={pencilYellow} />
        </div>
      </div>
      <div className="flex h-16 w-full flex-col items-center justify-center rounded-lg rounded-tr-none border border-dashed border-yellow-400 py-2 font-bold">
        <button
          className="rounded-2xl bg-gray-400 px-8 py-2 text-white"
          id="button"
        >
          دکمه
        </button>
      </div>
    </div>
  )
}

ButtonElement.displayName = 'TextElement'
export default ButtonElement
