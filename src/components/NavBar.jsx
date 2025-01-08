import { React, useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [toggleState, setToggleState] = useState({
    showUtilities: false,
    showCircular: false,
    showSearchCircular: false,
    showMemorandum: false,
    showMaster: false,
    showDocument: false,
  });

  const circularMenuRef = useRef(null); 
  const CircularSearchMenuRef = useRef(null); 
  const MemoMenuRef = useRef(null); 
  const masterMenuRef = useRef(null); 
  const docMenuRef = useRef(null); 
  const utilitiesMenuRef = useRef(null); 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggle = (toggleName) => {
    setToggleState((prevState) => {
      const updatedState = {
        showUtilities: false,
        showCircular: false,
        showSearchCircular: false,
        showMemorandum: false,
        showMaster: false,
        showDocument: false,
      };
      updatedState[toggleName] = !prevState[toggleName];
      return updatedState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        circularMenuRef.current &&
        !circularMenuRef.current.contains(event.target)
      ) {
        setToggleState((prevState) => ({
          ...prevState,
          showCircular: false, 
        }));
      }
      if (
        CircularSearchMenuRef.current &&
        !CircularSearchMenuRef.current.contains(event.target)
      ) {
        setToggleState((prevState) => ({
          ...prevState,
          showSearchCircular: false, 
        }));
      }
      if (
        MemoMenuRef.current &&
        !MemoMenuRef.current.contains(event.target)
      ) {
        setToggleState((prevState) => ({
          ...prevState,
          showMemorandum: false, 
        }));
      }
      if (
        masterMenuRef.current &&
        !masterMenuRef.current.contains(event.target)
      ) {
        setToggleState((prevState) => ({
          ...prevState,
          showMaster: false, 
        }));
      }
      if (
        docMenuRef.current &&
        !docMenuRef.current.contains(event.target)
      ) {
        setToggleState((prevState) => ({
          ...prevState,
          showDocument: false, 
        }));
      }

      if (
        utilitiesMenuRef.current &&
        !utilitiesMenuRef.current.contains(event.target)
      ) {
        setToggleState((prevState) => ({
          ...prevState,
          showUtilities: false, 
        }));
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogoutClick = () => {
    setToggleState({
      showUtilities: false,
      showCircular: false,
      showSearchCircular: false,
      showMemorandum: false,
      showMaster: false,
      showDocument: false,
    });
    handleOpen();
  };

  const toggleUtilities = () => toggle("showUtilities");
  const toggleCircular = () => toggle("showCircular");
  const toggleSearchCircular = () => toggle("showSearchCircular");
  const toggleMemorandum = () => toggle("showMemorandum");
  const toggleMaster = () => toggle("showMaster");
  const toggleDocument = () => toggle("showDocument");

  return (
    <div>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>



            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    href="/"
                    class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <div ref={circularMenuRef} class="relative">
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                      onClick={toggleCircular}
                    >
                      Circular
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                          toggleState.showCircular ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    {toggleState.showCircular && (
                      <div class="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                        <a
                          href="/circularlist"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          New Circular List
                        </a>
                        <a
                          href="/faqlist"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          List of Circular
                        </a>
                        <a
                          href="/favouritescircular"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Favourites Circular List
                        </a>
                      </div>
                    )}
                  </div>




                  <div ref={CircularSearchMenuRef} class="relative">
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                      onClick={toggleSearchCircular}
                    >
                      Circular Search
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                          toggleState.showSearchCircular ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    {toggleState.showSearchCircular && (
                      <div class="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                        <a
                          href="/dcircularsearch"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Circular Search
                        </a>
                        <a
                          href="/askcontent"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Content Search
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Alphabetical KeyWord Search
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Division Wise Circular List
                        </a>
                        <a
                          href="/circularsearch"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Related Circular Search
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Circular Responded Search
                        </a>
                        <a
                          href="/oldcircularindexsearch"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Old Circular Index Search
                        </a>
                      </div>
                    )}
                  </div>





                  <div ref={MemoMenuRef} class="relative">
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                      onClick={toggleMemorandum}
                    >
                      Memorandum
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                          toggleState.showMemorandum ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    {toggleState.showMemorandum && (
                      <div class="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Memorandum List
                        </a>
                        <a
                          href="/memorandumcancelled"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Memorandum Cancelled List
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Memorandum Search
                        </a>
                      </div>
                    )}
                  </div>






                  <div ref={masterMenuRef} class="relative">
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                      onClick={toggleMaster}
                    >
                      Master Circular
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                          toggleState.showMaster ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    {toggleState.showMaster && (
                      <div class="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                         <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Master Circular List
                        </a>
                        <a
                          href="/mastercircularsearch"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Master Circular Search
                        </a>
                      </div>
                    )}
                  </div>





                  <div ref={docMenuRef} class="relative">
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                      onClick={toggleDocument}
                    >
                      Document
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                          toggleState.showDocument ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    {toggleState.showDocument && (
                      <div class="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                         <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Document List
                        </a>
                        <a
                          href="/docketlistall"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Docket List
                        </a>
                        <a
                          href="/documentsearch"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Document Search
                        </a>
                        <a
                          href="/docWithdrawn"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Document Withdrawn List
                        </a>
                      </div>
                    )}
                  </div>





                  <div ref={utilitiesMenuRef} class="relative">
                    <a
                      href="#"
                      class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                      onClick={toggleUtilities}
                    >
                      Utilities
                      <svg
                        className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                          toggleState.showUtilities ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    {toggleState.showUtilities && (
                      <div class="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                        <a
                          href="/news"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          News
                        </a>
                        <a
                          href="/showgroupnames"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Group Details
                        </a>
                        <a
                          href="/presentpwd"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Change Password
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Software
                        </a>
                        <a
                          href="/calculator"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Calculator
                        </a>
                        <a
                          href="/calendar"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Calendar
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Bar Chart
                        </a>
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                        >
                          Pie Chart
                        </a>
                      </div>
                    )}
                  </div>



                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-xs md:px-2 md:py-1 md:text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={handleOpen}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>


      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Do you want to Log out?
            </Typography>
            <div className="flex  gap-3 mt-5 justify-end">
              <Button color="inherit" variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button color="error" variant="contained">
                Log Out
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
