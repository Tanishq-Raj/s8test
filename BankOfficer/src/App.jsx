
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyAssets from './officerPages/my Assets/MyAssets';
import Single from './officerPages/singlePage/single';
import Auction from './officerPages/auction/Auction';
import AssetsViwe from './officerPages/my Assets/AssetsView';
import AddAsset from './officerPages/add new asset/AddAsset';
import Profilepage from './officerPages/profilePage/ProfilePage';
import Profile2 from './officerPages/profile Settings/Profile2';
import Dashboard from './officerPages/dashboard/dashboard';
// import PropertyDetailsForm from './dashComponent/nAsset Forms/PropertyDetailForm';
// import AddressDetailsForm from './dashComponent/nAsset Forms/AddressForm';
// import AuctionDetailsForm from './dashComponent/nAsset Forms/AuctionForm';


function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
          
       <Route path="/" element={<Profilepage/>} />
       <Route path="/myAssets" element={<MyAssets/>} />
       <Route path="/profile" element={<Profile2 />} />
       <Route path="/auction" element={<Auction />} />
       <Route path="/view" element={<AssetsViwe />} />
       <Route path="/property/:id" element={<Single />} />
       <Route path="/addNew" element={<AddAsset/>} />
       <Route path="/dashboard" element={<Dashboard/>} />

       {/* <Route path="/property-details" element={<PropertyDetailsForm />} />
       <Route path="/address-details" element={<AddressDetailsForm/> } />
      <Route path="/auction-details" element={<AuctionDetailsForm />} />  */}

       </Routes>
       </BrowserRouter>
  )
}

export default App
