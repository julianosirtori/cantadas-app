import Wrapper from '@/components/atoms/Wrapper'
import Text from '@/components/atoms/Text'

import Navigation from './components/Navigation'
import styles from './PickUpLine.module.scss'
import useCopyPickUpLine from '@/utils/hooks/useCopyPickUpLine'
import { PickUpLine as PickUpLineModel } from '@prisma/client'

type PickUpLineProps = {
  className?: string,
  pickUpLineModel: PickUpLineModel

}

const PickUpLine = ({ className, pickUpLineModel, ...props }: PickUpLineProps) => {
  // const copyPickUpLine = useCopyPickUpLine(pickUpLineModel.line)

  return (
    <Wrapper
      element="main"
      className={`${styles.pickUpLine} ${className}`}
      {...props}
    >
      <Text
        // onClick={() => copyPickUpLine()}
        element="h1"
        color="white"
        data-testid="text-pickUpLine"
        className={styles.pickUpLine__title}
      >{`"${pickUpLineModel.line}"`}</Text>

      <Navigation />
    </Wrapper>
  )
}

export default PickUpLine
