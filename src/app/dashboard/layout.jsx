import DashboardHeader from "@/components/dashboard-header";
import { Container } from "react-bootstrap";

export const metadata = {
	title: {
		absolute: "Dashboard",
	},
	description: "High quality and cheap products",
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
