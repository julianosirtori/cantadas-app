import { toast } from 'react-toastify'
import copy from 'copy-to-clipboard'
import { useSelector } from 'react-redux'
import { getPickUpLines } from 'store/features/pickUpLine/pickUpLineSlice'

const useCopyPickUpLine = () => {
    const pickUpLine = useSelector(getPickUpLines)

    const copyPickUpLine = () => {
        copy(pickUpLine)
        toast('copiado')
    }

    return copyPickUpLine
}

export default useCopyPickUpLine
