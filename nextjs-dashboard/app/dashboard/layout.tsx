import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '../ui/dashboard/header';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      
      {/* HEADER — MOBILE ONLY */}
      <Header />

      {/* SIDEBAR */}
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>

      {/* MAIN CONTENT */}
      <div className="grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}