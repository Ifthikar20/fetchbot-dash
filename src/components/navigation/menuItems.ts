import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

// Material UI Icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

export type MenuItem = {
  id: string;
  title: string;
  type: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  url?: string;
  children?: MenuItem[];
};

// Menu Items - Simplified version with just the dashboard
const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: DashboardOutlinedIcon,
    url: '/dashboard'
  }
];

export default menuItems;