import { plus } from '@/assets/icons/'
import { ReactElement, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Identifier } from 'dnd-core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, addElement } from '@/features/pagebuilder/store'
import { buttonType, page, textType } from '@/types/pagebuilder'
import GeneralElement from '../Elements/Element'

// interface PageWidgetProps {

// }
interface DragItem {
  index: number
  id: string
  type: string
}
export default function PageWidget() {
  const [render, setRender] = useState(null as ReactElement | null)
  const state = useSelector<RootState>(
    (state: RootState) => state.pagebuilder
  ) as page
  const dispatch = useDispatch()
  // console.log('state', state)

  const [{ isOver }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null; isOver: boolean }
  >({
    accept: 'BOX',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
        isOver: monitor.isOver(),
      }
    },
    hover(item: DragItem) {
      switch (item.type) {
        case 'text':
          setRender(
            <GeneralElement
              type="text"
              index={0}
              id={0}
              moveCard={() => {
                console.log('card move')
              }}
              className="opacity-50"
            />
          )
          break
        case 'button':
          setRender(
            <GeneralElement
              type="button"
              index={0}
              id={0}
              moveCard={() => {
                console.log('card move')
              }}
              className="opacity-50"
            />
          )
          break
        default:
          setRender(null)
      }
    },
    drop(item) {
      // console.log(item)

      setRender(null)
      let element
      switch (item.type) {
        case 'text':
          element = {
            id: state.elements.length + 1,
            type: 'text',
            settings: {
              text: 'متن',
              alignH: 'center',
              alignV: 'center',
              color: '#000000',
              fontSize: 16,
              lineHeight: 1.5,
              margin: 0,
              padding: 0,
              link: '',
            },
          } as textType
          break
        case 'button':
          element = {
            id: state.elements.length + 1,
            type: 'button',
            settings: {
              text: 'دکمه',
              link: '',
              alignH: 'center',
              alignV: 'center',
              color: '#000000',
              bgColor: '#ffffff',
              rounded: 0,
              margin: 0,
              padding: 0,
              size: 'md',
              width: '100',
            },
          } as buttonType
          break
        default:
          break
      }
      // console.log(element)

      if (element) dispatch(addElement(element))
    },
  })
  return (
    <div className="flex flex-col gap-3">
      <div
        ref={drop}
        id="main-layout"
        className="flex h-[800px] w-[360px] flex-col gap-4 overflow-auto bg-white px-4 py-8"
      >
        {state.elements.map(ele => (
          <GeneralElement
            type={ele.type}
            id={state.lastID + 1}
            key={state.lastID + 1}
            index={state.lastID + 1}
            moveCard={() => console.log('movedcard')}
          />
          // return (

          //   <div key={ele.id} id="button-template" ref={ref}>
          //     <div className="flex flex-col items-end">
          //       <div className="inline-flex h-8 w-24 items-center justify-center gap-3 rounded-t-xl rounded-bl-xl rounded-br-sm border border-orange-200 bg-white px-2">
          //         <div className="relative h-4 w-4">
          //           <img src={hand} />
          //         </div>
          //         <div className="relative h-4 w-4">
          //           <img src={binYellow} />
          //         </div>
          //         <div className="relative h-4 w-4">
          //           <img src={pencilYellow} />
          //         </div>
          //       </div>
          //       <div className="flex h-16 w-full flex-col items-center justify-center rounded-lg rounded-tr-none border border-dashed border-yellow-400 py-2 font-bold">
          //         <button
          //           className="rounded-2xl bg-gray-400 px-8 py-2 text-white"
          //           id="button"
          //         >
          //           دکمه
          //         </button>
          //       </div>
          //     </div>
          //   </div>
          // )
        ))}
        {isOver && !!render && render}
        <div
          id="add-new-element"
          className="flex h-24 w-full flex-col items-center gap-4 rounded-lg border border-dashed border-blue-500 py-2 font-bold"
        >
          <img src={plus} className="rounded-lg bg-slate-200 p-2" />
          <span className="text-sm text-blue-500">
            یک قالب را بکشید و رها کنید
          </span>
        </div>
      </div>

      <button className="w-full rounded-lg border border-white bg-[#ffffff60] p-2 font-bold text-blue-600">
        افزودن صفحه
      </button>
    </div>
  )
}
