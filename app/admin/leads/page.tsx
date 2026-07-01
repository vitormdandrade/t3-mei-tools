import type { Metadata } from 'next';
import AdminLeadsPage from './Client';

export const metadata: Metadata = {
  title: 'Admin — Leads',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminLeadsPage />;
}
