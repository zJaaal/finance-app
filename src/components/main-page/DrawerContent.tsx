import {
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SavingsIcon from "@mui/icons-material/Savings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
const DrawerContent = () => {
  const theme = useTheme();
  return (
    <div>
      <List>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SavingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Savings"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <ListItemText primary={"Debts"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={"Expenses"} />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SettingsApplicationsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItemButton>
      </List>
    </div>
  );
};

export default DrawerContent;
