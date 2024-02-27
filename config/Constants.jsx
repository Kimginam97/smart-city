import { LuZoomIn, LuZoomOut, LuDoorOpen } from 'react-icons/lu'
import { HiOutlineShare } from 'react-icons/hi'
import { RiLineHeight } from 'react-icons/ri'

export const EditorTabs = [
  {
    name: 'zoom-in',
    icon: <LuZoomIn className="w-10 h-10" />
  },
  {
    name: 'zoom-out',
    icon: <LuZoomOut className="w-10 h-10" />
  },
  {
    name: 'floor',
    icon: <RiLineHeight className="w-10 h-10" />
  },
  {
    name: 'indoor',
    icon: <LuDoorOpen className="w-10 h-10" />
  },
  {
    name: 'share',
    icon: <HiOutlineShare className="w-10 h-10" />
  }
]
