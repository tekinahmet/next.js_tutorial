import DashboardHeader from "@/components/dashboard-header";
import { Container } from "react-bootstrap";

export const metadata = {
  title: {
    absolute: "Dashboard", //template i ezer
  },
  description: "About our company",
};
const DashboardLayout = ({ children }) => {
  return (
    <>
      <DashboardHeader />
      <Container className="flex-grow-1">{children}</Container>
    </>
  );
};

export default DashboardLayout;
