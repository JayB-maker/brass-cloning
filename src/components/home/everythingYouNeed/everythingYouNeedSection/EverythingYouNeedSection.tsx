import { useState } from 'react'
import { Card } from '../../../ui'
import { everythingYouNeedContext } from '../../../../helper/Context'
import LeftSection from './leftSection/LeftSection'
import RightSection from './rightSection/RightSection'

const EverythingYouNeedSection = () => {
    const [clicked, setClicked] = useState(0)
  return (
    <everythingYouNeedContext.Provider value={{clicked, setClicked}}>
    <Card flex alignitems='center' gap='64px' margin='32px 0 0' mdflexdirection='column-reverse'>
        <LeftSection />
        <RightSection />
    </Card>
    </everythingYouNeedContext.Provider>
  )
}

export default EverythingYouNeedSection