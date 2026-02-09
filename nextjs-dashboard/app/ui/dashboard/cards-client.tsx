'use client';

import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '../fonts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { setCardData } from '@/redux/slices/dashboardSlice';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

type CardClientProps = {
  initialData: {
    numberOfCustomers: number;
    numberOfInvoices: number;
    totalPaidInvoices: string;
    totalPendingInvoices: string;
  };
};

export default function CardClient({ initialData }: CardClientProps) {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector((state: RootState) => state.dashboard.cards);

  // hydrate Redux dari SSR
  useEffect(() => {
    dispatch(setCardData(initialData));
  }, [dispatch, initialData]);

  if (!cards) return null;

  return (
    <>
      <Card
        title="Collected"
        value={cards.totalPaidInvoices}
        type="collected"
      />
      <Card
        title="Pending"
        value={cards.totalPendingInvoices}
        type="pending"
      />
      <Card
        title="Total Invoices"
        value={cards.numberOfInvoices}
        type="invoices"
      />
      <Card
        title="Total Customers"
        value={cards.numberOfCustomers}
        type="customers"
      />
    </>
  );
}

// Card UI component

function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon && <Icon className="h-5 w-5 text-gray-700" />}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
