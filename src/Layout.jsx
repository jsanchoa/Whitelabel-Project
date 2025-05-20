import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { BreadCrumbPage } from "./components/breadcrumb";

// Funcion normal
export function FuncionPruebaJimena(argumentos) {
  if (argumentos) {
    console.log("Hola");
  } else {
    console.log("No hay nada");
  }
}

export default function Layout({ children }) {
  const data = {
    user: {
      first_page: "Dashboard",
      second_page: "Management",
    },
  };

  return (
    <SidebarProvider>
      {/*  */}
      <AppSidebar />

      <SidebarInset>
        {/* Area del Breadcrumb */}
        <BreadCrumbPage {...data.user} />

        {/* Componente  */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
