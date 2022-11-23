import React, { ReactElement, ReactNode, useRef } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

export const PrimaryButton = ({children}) => {
  return (
    <>
      <Button colorScheme='blue'>{children}</Button>
    </>
  );
};
