import * as React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginBottom: '10px',
    minHeight: '56px',
    marginTop: '1rem'
  },
  logoCircle: {
    width: '60px',
    height: '60px',
    backgroundColor: '#A7B5BE',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: '-10px'
  },
  logoText: {
    color: '#004663',
    fontSize: '24px',
    fontWeight: 'bold'
  }
};

export default function NavigationBar() {
  const { section } = useParams();
  const location = useLocation(); // Hook to track the current route
  const [activeIndex, setActiveIndex] = React.useState(null);

  const navItems = [
    { label: "Home", isBold: true, to: "/" },
    // { label: "Auctions", isBold: false, to: "/auctions" },
    { label: "Assets", isBold: false, to: "/properties" },
    { label: "About Us", isBold: false, to: "/about" },
    { label: "Contact Us", isBold: false, to: "/contact" },
  ];

  // Update activeIndex based on current route
  React.useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.findIndex(item => item.to === currentPath);
    setActiveIndex(activeItem);
  }, [location.pathname]);

  return (
    <div className="flex flex-wrap gap-5 justify-between px-9 py-3.5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div style={styles.logoContainer}>
        <Link to="/">
          <div style={styles.logoCircle}>
            <span style={styles.logoText}>S8</span>
          </div>
        </Link>
      </div>
      
      {/* Search Bar */}
      <div className="flex-1 max-w-md mx-4 mt-5">
        <form className="flex overflow-hidden relative gap-5 px-5 py-3 border border-solid bg-white border-zinc-300 rounded-[50px] w-full max-md:px-3 max-md:py-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b10ef0b9ed50f347e507ce263da543df27eb52dce5de8cd66bf0b6544ba8a03?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
            alt="Search Icon"
            className="object-contain shrink-0 w-6 aspect-square max-md:w-4"
          />
          <label htmlFor="searchInput" className="sr-only">
            Search for auctions
          </label>
          <input
            type="search"
            id="searchInput"
            className="flex-auto my-auto bg-transparent text-black border-none focus:outline-none max-md:text-sm"
            placeholder="Search for auctions near you ...."
            aria-label="Search for auctions near you"
          />
        </form>
      </div>

      <div className="flex my-auto text-base text-right text-black max-md:max-w-full">
        <div className="flex flex-wrap flex-auto gap-10 justify-between items-center py-2.5 w-full max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer ${isActive ? "font-bold" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0a294f996ea60c74ea8b67cc5b04be9dc56446b976248136facd6ce324cb442?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
            alt="User Profile Icon"
            className="object-contain self-start shrink-0 w-12 aspect-square cursor-pointer"
          />
          <NavLink to='/sign-up' className="gap-2.5 self-stretch px-6 py-2.5 my-auto font-semibold text-white bg-sky-900 rounded-[55px] max-md:px-5">
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}



// import * as React from "react";
// import { NavLink, useParams, useLocation } from "react-router-dom";

// export default function NavigationBar() {
//   const { section } = useParams();
//   const location = useLocation(); // Hook to track the current route
//   const [activeIndex, setActiveIndex] = React.useState(null);

//   const navItems = [
//     { label: "Home", isBold: true, to: "/" },
//     // { label: "Auctions", isBold: false, to: "/auctions" },
//     { label: "Assets", isBold: false, to: "/properties" },
//     { label: "About Us", isBold: false, to: "/about" },
//     { label: "Contact Us", isBold: false, to: "/contact" },
//   ];

//   // Update activeIndex based on current route
//   React.useEffect(() => {
//     const currentPath = location.pathname;
//     const activeItem = navItems.findIndex(item => item.to === currentPath);
//     setActiveIndex(activeItem);
//   }, [location.pathname]);

//   return (
//     <div className="flex flex-wrap gap-5 justify-between px-9 py-3.5 w-full bg-white max-md:px-5 max-md:max-w-full">
//       <div className="flex text-3xl font-extrabold leading-none text-sky-900 whitespace-nowrap">
//         {/* <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/a227a67fb1aa60ea4fcfdf701adff7cfa910ebdd82c2188f253364885db64408?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
//           alt="Company Logo"
//           className="object-contain shrink-0 w-16 aspect-[0.79]"
//         /> */}
        
//         <div className="self-start mt-11 max-md:mt-10">S8</div>
//       </div>

//       {/* <div className="logo-container">
//         <Link to="/">
//           <div className="logo-circle">
     
//               <span className="logo-text">S8</span>
   
//           </div>
//         </Link>
//       </div> */}
      
//       {/* Search Bar */}
//       <div className="flex-1 max-w-md mx-4 mt-5">
//         <form className="flex overflow-hidden relative gap-5 px-5 py-3 border border-solid bg-white border-zinc-300 rounded-[50px] w-full max-md:px-3 max-md:py-2">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b10ef0b9ed50f347e507ce263da543df27eb52dce5de8cd66bf0b6544ba8a03?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
//             alt="Search Icon"
//             className="object-contain shrink-0 w-6 aspect-square max-md:w-4"
//           />
//           <label htmlFor="searchInput" className="sr-only">
//             Search for auctions
//           </label>
//           <input
//             type="search"
//             id="searchInput"
//             className="flex-auto my-auto bg-transparent text-black border-none focus:outline-none max-md:text-sm"
//             placeholder="Search for auctions near you ...."
//             aria-label="Search for auctions near you"
//           />
//         </form>
//       </div>

//       <div className="flex my-auto text-base text-right text-black max-md:max-w-full">
//         <div className="flex flex-wrap flex-auto gap-10 justify-between items-center py-2.5 w-full max-md:max-w-full">
//           {navItems.map((item, index) => (
//             <NavLink
//               key={index}
//               to={item.to}
//               className={({ isActive }) =>
//                 `cursor-pointer ${isActive ? "font-bold" : ""}`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0a294f996ea60c74ea8b67cc5b04be9dc56446b976248136facd6ce324cb442?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
//             alt="User Profile Icon"
//             className="object-contain self-start shrink-0 w-12 aspect-square cursor-pointer"
//           />
//           <NavLink to='/sign-up' className="gap-2.5 self-stretch px-6 py-2.5 my-auto font-semibold text-white bg-sky-900 rounded-[55px] max-md:px-5">
//             Sign in
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// }
