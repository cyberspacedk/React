import React from "react";
import PrimarySearchAppBar from "./MaterialComponent/AppBar";
import IntegrationReactSelect from "./MaterialComponent/Select";
import ReactSelect from "./ReactSelect/ReactSlect";
import ImageAvatars from "./MaterialComponent/Avatars";
import SimpleBadge from "./MaterialComponent/Badges";
import LabelBottomNavigation from "./MaterialComponent/BottomNavigation";
import TemporaryDrawer from "./MaterialComponent/Drawer";
import FormDialog from "./MaterialComponent/FormModal";
import Accordeon from "./MaterialComponent/Accordeon";
import SimpleTabs from "./MaterialComponent/Tabs";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <h2>Select</h2>
      <IntegrationReactSelect />
      <h2>React Select</h2>
      <ReactSelect />
      <h2>Avatar</h2>
      <ImageAvatars />
      <h2>BADGES</h2>
      <SimpleBadge />
      <h2>Bottom navigation</h2>
      <LabelBottomNavigation />
      <h2>Drawer</h2>
      <TemporaryDrawer />
      <h2>Form Modal</h2>
      <FormDialog />
      <h2>Accordeon</h2>
      <Accordeon />
      <h2>Tabs</h2>
      <SimpleTabs />
    </div>
  );
}

export default App;
