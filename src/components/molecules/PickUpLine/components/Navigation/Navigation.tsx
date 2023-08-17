import { useDispatch } from 'react-redux'

import Text from '@/components/atoms/Text'
import Button from '@/components/atoms/Button'
import Wrapper from '@/components/atoms/Wrapper'
import Icon from '@/components/atoms/Icon'

import styles from './Navigation.module.scss'

import useCopyPickUpLine from '@/utils/hooks/useCopyPickUpLine'

const Navigation = () => {
  // const copyPickUpLine = useCopyPickUpLine('')

  return (
    <Wrapper element="section" className={styles.navigation}>
      <Button
        variant="icon"
        aria-label="share"
        data-testid="button-share"
      // onClick={() => copyPickUpLine()}
      >
        <Icon size={56} icon="copy" />
      </Button>
      <Button
        variant="outline"
        aria-label="reload"
        data-testid="button-generate"
      >
        <Text>Próxima</Text>
      </Button>
    </Wrapper>
  )
}

export default Navigation
