"use client"
import { toast } from 'react-toastify'
import copy from 'copy-to-clipboard'

const useCopyPickUpLine = (pickUpLine: string) => {

    const copyPickUpLine = () => {
        copy(pickUpLine)
        toast('copiado')
    }

    return copyPickUpLine
}

export default useCopyPickUpLine
