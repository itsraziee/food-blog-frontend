// components
import AuthRequired from '../components/AuthRequired';
import Page from '../components/Page';
import { DashboardCard } from '../sections/@dashboard/dashboardapp';
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Home">
      <AuthRequired>
        <DashboardCard />
      </AuthRequired>
    </Page>
  );
}
