import PageTitle from "@/components/ui/PageTitle";
import RainbowLine from "@/components/ui/RainbowLine";
import styles from "./admin.module.css"
import AdminDashboard from "@/components/admin/AdminDashboard";


export default function AdminPage() {
  return (
    <><RainbowLine />
    <div className={styles.adminPage}>
          <PageTitle
              firstWord="Admin"
              secondWord="Dashboard"
              description="This page is for administrators to add or edit events and books to appear on the website." />
            <AdminDashboard />
      </div>
      <RainbowLine />
      </>
  );
}