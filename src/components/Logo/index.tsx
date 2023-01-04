/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { chakra, useTheme } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo = ({ ...rest }) => {
  const theme = useTheme();
  const gradientId = 'logo-brand-gradient';
  return <Image src="/logo.svg" alt="The Martyrs" width={60} height={15} />;
};
