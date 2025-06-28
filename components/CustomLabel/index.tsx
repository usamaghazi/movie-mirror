import React from 'react'
import { TabText, TabTextContainer } from './styles'

interface CustomLabelProps {
    label:string,
    focused: boolean,
    inactiveLabel:string
}

const CustomLabel:React.FC<CustomLabelProps> = ({
    label,
    focused,
    inactiveLabel
}) => {
  return (
    <TabTextContainer>
      <TabText
      focused={focused}
      inactiveLabel={inactiveLabel}
      >
        {label}
        </TabText>
    </TabTextContainer>
  )
}

export default CustomLabel