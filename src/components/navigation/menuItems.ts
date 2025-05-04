import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

// Material UI Icons
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export type MenuItem = {
  id: string;
  title: string;
  type: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  url?: string;
  children?: MenuItem[];
};

// Menu Items
const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    icon: DashboardOutlinedIcon,
    url: '/dashboard'
  },
  {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: PeopleOutlineOutlinedIcon,
        children: [
          {
            id: 'login',
            title: 'Login',
            type: 'item',
            icon: LoginOutlinedIcon,
            url: '/auth/login'
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            icon: PersonAddOutlinedIcon,
            url: '/auth/register'
          }
        ]
      },
      {
        id: 'profile',
        title: 'Profile',
        type: 'item',
        icon: AccountCircleOutlinedIcon,
        url: '/profile'
      },
      {
        id: 'settings',
        title: 'Settings',
        type: 'item',
        icon: SettingsOutlinedIcon,
        url: '/settings'
      }
    ]
  }
];

export default menuItems;