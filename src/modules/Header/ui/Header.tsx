import * as React from 'react';
import Stack from '@mui/material/Stack';
import { navLinks } from '@/shared/data/data';
import Link from 'next/link';

export default function Header() {
  return (
    <Stack direction='row' spacing={2}>
      {navLinks.map((link) => (
        <Link key={link.label} href={link.href}>
          {link.label}
        </Link>
      ))}
    </Stack>
  );
}
