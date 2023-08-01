import { plus, hand, binYellow, pencilYellow } from '@/assets/icons/'
import { useRef, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Identifier, XYCoord } from 'dnd-core'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { RootState } from '@/features/pagebuilder/store'
import { page } from '@/types/pagebuilder'
import { log } from 'console'

// interface PageWidgetProps {

// }
interface DragItem {
  index: number
  id: string
  type: string
}
export default function PageWidget() {
  const [render, setRender] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const state = useSelector<RootState>(
    (state: RootState) => state.pagebuilder
  ) as page
  console.log(state)

  const [{ handlerId, isHovering }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null; isHovering: boolean }
  >({
    accept: 'BOX',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isHovering: monitor.isOver(),
      }
    },
    // hover(item: DragItem, monitor) {
    //   if (!ref.current) {
    //   }
    // },
    drop(item, monitor) {
      console.log(item)

      setRender(true)
    },
  })
  return (
    <div className="flex flex-col gap-3">
      <div
        ref={drop}
        id="main-layout"
        className="flex h-[800px] w-[360px] flex-col gap-4 overflow-auto bg-white px-4 py-8"
      >
        <div
          id="add-new-element"
          className="flex h-24 w-full flex-col items-center gap-4 rounded-lg border border-dashed border-blue-500 py-2 font-bold"
        >
          <img src={plus} className="rounded-lg bg-slate-200 p-2" />
          <span className="text-sm text-blue-500">
            یک قالب را بکشید و رها کنید
          </span>
        </div>
        {state.elements.map(ele => (
          <div
            key={ele.id}
            id="button-template"
            ref={ref}
            className={classNames(
              !isHovering && !render && 'opacity-0',
              isHovering && !render && 'opacity-50',
              render && 'opacity-100'
            )}
          >
            <div className="flex flex-col items-end">
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
          </div>
        ))}
      </div>

      <button className="w-full rounded-lg border border-white bg-[#ffffff60] p-2 font-bold text-blue-600">
        افزودن صفحه
      </button>
    </div>
  )
}
