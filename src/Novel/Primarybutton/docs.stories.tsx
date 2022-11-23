import React from 'react';

import { Button } from '@chakra-ui/react';

import { PrimaryButton } from './index';

export default {
  title: 'Novel/PrimaryButton',
};

export const Default = () => {
  return (
      <PrimaryButton>Trigger Modal</PrimaryButton>
  );
};

// export const WithCustomParameters = () => {
//   return (
//     <ConfirmModal
//       title="ConfirmModal Title"
//       message="Custom message"
//       onConfirm={() => alert('Custom Action')}
//       confirmText="Custom Text"
//       confirmVariant="@danger"
//     >
//       <Button>Trigger Modal</Button>
//     </ConfirmModal>
//   );
// };
//
// export const EnabledFalse = () => {
//   return (
//     <ConfirmModal onConfirm={() => alert('Custom Action')} isEnabled={false}>
//       <Button>Trigger Action</Button>
//     </ConfirmModal>
//   );
// };
