import React, { ComponentProps } from 'react';

import { TextArea as NativeBaseTextArea } from 'native-base';

import { useIsVerticalLayout } from '../Provider/hooks';
import { Text, getTypographyStyleProps } from '../Typography';

type TextAreaProps = { isInvalid?: boolean };

const TextArea = React.forwardRef<
  typeof NativeBaseTextArea,
  ComponentProps<typeof NativeBaseTextArea> & TextAreaProps
>(({ isInvalid, ...props }, ref) => {
  const small = useIsVerticalLayout();
  const textProps = small
    ? getTypographyStyleProps('Body1')
    : (getTypographyStyleProps('Body2') as Pick<
        ComponentProps<typeof Text>,
        'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight'
      >);
  return (
    <NativeBaseTextArea
      ref={ref}
      isInvalid={isInvalid}
      borderColor="border-default"
      bg="action-secondary-default"
      borderRadius={12}
      color="text-default"
      {...textProps}
      _focus={{
        borderColor: isInvalid ? 'border-critical-default' : 'focused-default',
        bg: 'action-secondary-default',
      }}
      _hover={{
        borderColor: isInvalid ? 'border-critical-default' : 'focused-default',
        bg: 'action-secondary-default',
      }}
      _disabled={{
        borderColor: 'border-disabled',
        bg: 'action-secondary-disabled',
      }}
      _invalid={{
        borderColor: 'border-critical-default',
      }}
      shadow="depth.1"
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
