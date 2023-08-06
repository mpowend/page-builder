import {
  aligncenter,
  alignleft,
  alignlinear,
  alignright,
  alignvertical,
  alignbottom,
} from '@/assets/icons'
import { RootState, updateElement } from '@/features/pagebuilder/store'
import { element, rootToElementSelector } from '@/types/pagebuilder'
import { useDispatch, useSelector } from 'react-redux'

export interface AlignRowProps {
  index: number
  hStateSelector: rootToElementSelector
  vStateSelector: rootToElementSelector
}

function AlignRow({ hStateSelector, vStateSelector }: AlignRowProps) {
  const hstate = useSelector<RootState>(hStateSelector)
  const vstate = useSelector<RootState>(vStateSelector)
  const v = ((vstate as element)?.settings.alignV as string) || ''
  const h = ((hstate as element)?.settings.alignH as string) || ''
  const calculateBorder = (dir: string, alignment: string) =>
    alignment == dir
      ? 'border-2 border-gray-400 p-1 rounded transition-300'
      : 'border-2 border-transparent border p-1 rounded transition-300'

  const dispatch = useDispatch()

  console.log(hstate, vstate)
  return (
    <div className="flex items-center justify-between self-stretch p-2">
      <button
        onClick={() => dispatch(updateElement('alignV', 'top'))}
        className={calculateBorder(v, 'top')}
      >
        <img src={alignlinear} />
      </button>
      <button
        onClick={() => dispatch(updateElement('alignV', 'mid'))}
        className={calculateBorder(v, 'mid')}
      >
        <img src={aligncenter} />
      </button>
      <button
        onClick={() => dispatch(updateElement('alignV', 'bot'))}
        className={calculateBorder(v, 'bot')}
      >
        <img src={alignbottom} />
      </button>
      <button
        onClick={() => dispatch(updateElement('alignH', 'left'))}
        className={calculateBorder(h, 'left')}
      >
        <img src={alignright} />
      </button>
      <button
        onClick={() => dispatch(updateElement('alignH', 'center'))}
        className={calculateBorder(h, 'center')}
      >
        <img src={alignvertical} />
      </button>
      <button
        onClick={() => dispatch(updateElement('alignH', 'right'))}
        className={calculateBorder(h, 'right')}
      >
        <img src={alignleft} />
      </button>
    </div>
  )
}

export default AlignRow
