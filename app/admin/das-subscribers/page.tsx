import type { Metadata } from 'next';
import AdminDasSubscribersPage from './Client';

export const metadata: Metadata = {
  title: 'Admin — DAS Subscribers',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminDasSubscribersPage />;
}
