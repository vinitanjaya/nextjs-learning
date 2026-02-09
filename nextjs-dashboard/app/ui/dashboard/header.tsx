'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/redux/slices/uiSlice';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center p-2 md:hidden">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="rounded-md bg-gray-100 p-2"
      >
        <Bars3Icon className="w-6" />
      </button>
    </div>
  );
}
