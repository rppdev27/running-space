import { ReactNode } from 'react';
import Header from "@/components/header"
import SideMenu from "@/components/side-menu"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] relative">  
          <SideMenu/>
          <div className="flex flex-col">
            <Header/>
            {children}
          </div>
      </div>
    </>
  );
};

export default Layout;
