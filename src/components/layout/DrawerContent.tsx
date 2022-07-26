import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SavingsIcon from "@mui/icons-material/Savings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";
const DrawerContent = () => {
  return (
    <div>
      <List>
        <Link to="/">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </Link>

        <Link to="/payments">
          <ListItemButton>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary={"Payments"} />
          </ListItemButton>
        </Link>

        <Link to="/savings">
          <ListItemButton>
            <ListItemIcon>
              <SavingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Savings"} />
          </ListItemButton>
        </Link>

        <Link to="/debts">
          <ListItemButton>
            <ListItemIcon>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary={"Debts"} />
          </ListItemButton>
        </Link>

        <Link to="/expenses">
          <ListItemButton>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary={"Expenses"} />
          </ListItemButton>
        </Link>

        <Link to="/settings">
          <ListItemButton>
            <ListItemIcon>
              <SettingsApplicationsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </Link>
      </List>
    </div>
  );
};

export default DrawerContent;
