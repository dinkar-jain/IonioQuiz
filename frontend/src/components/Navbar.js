import { Fragment } from 'react'
import { useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Ionio Quiz', href: '/' }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  let { signInDetails } = useSelector((state) => state.signIn);
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <>
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ml-9">
                        <div className="flex flex-shrink-0 items-center" style={{ marginRight: "0.5rem" }}>
                          <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2282 9.49999C10.2282 10.5438 9.81279 11.5435 9.07517 12.2809L3.71437 17.6407C3.62434 17.7307 3.53273 17.816 3.4348 17.8949C3.20103 18.0892 2.94673 18.2518 2.68138 18.3829C2.30704 18.1982 1.95797 17.9502 1.64681 17.6391C0.111544 16.1041 0.111544 13.6138 1.64681 12.0772L4.22454 9.49999L1.64839 6.92118C0.113124 5.38621 0.113124 2.89583 1.64839 1.35928C1.95955 1.04818 2.30862 0.80183 2.68138 0.617065C2.94989 0.749717 3.20577 0.913952 3.4427 1.10977C3.53589 1.18873 3.6275 1.27085 3.71437 1.3577L3.93076 1.57405L9.07517 6.71746C9.81437 7.45652 10.2282 8.45773 10.2282 9.49999Z" fill="#1F2A37" />
                          </svg>
                          <svg className='relative right-2 ' width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3469 14.4999C23.3469 22.1163 17.1506 28.3099 9.53428 28.3099H2.93831C2.05064 28.3099 1.24826 27.9593 0.655946 27.3892C0.646469 27.2929 0.643311 27.195 0.643311 27.0939C0.643311 24.9225 2.40445 23.1602 4.57783 23.1602H12.469C17.2454 23.1602 21.1325 19.2754 21.1325 14.4983C21.1325 9.72287 17.2454 5.8365 12.469 5.8365H4.57941C2.4076 5.8365 0.64489 4.0757 0.64489 1.90274C0.64489 1.80325 0.648049 1.70376 0.657526 1.60743C1.24984 1.03735 2.05222 0.686768 2.93989 0.686768H9.53428C17.1506 0.689926 23.3469 6.8835 23.3469 14.4999Z" fill="#1F2A37" />
                          </svg>
                        </div>
                        {signInDetails !== undefined ?
                          <>
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.799988 2.49999C0.799988 2.07565 0.968559 1.66868 1.26862 1.36862C1.56868 1.06857 1.97564 0.899994 2.39999 0.899994H21.6C22.0243 0.899994 22.4313 1.06857 22.7314 1.36862C23.0314 1.66868 23.2 2.07565 23.2 2.49999C23.2 2.92434 23.0314 3.33131 22.7314 3.63136C22.4313 3.93142 22.0243 4.09999 21.6 4.09999H2.39999C1.97564 4.09999 1.56868 3.93142 1.26862 3.63136C0.968559 3.33131 0.799988 2.92434 0.799988 2.49999ZM0.799988 10.5C0.799988 10.0756 0.968559 9.66868 1.26862 9.36862C1.56868 9.06857 1.97564 8.89999 2.39999 8.89999H21.6C22.0243 8.89999 22.4313 9.06857 22.7314 9.36862C23.0314 9.66868 23.2 10.0756 23.2 10.5C23.2 10.9243 23.0314 11.3313 22.7314 11.6314C22.4313 11.9314 22.0243 12.1 21.6 12.1H2.39999C1.97564 12.1 1.56868 11.9314 1.26862 11.6314C0.968559 11.3313 0.799988 10.9243 0.799988 10.5ZM0.799988 18.5C0.799988 18.0756 0.968559 17.6687 1.26862 17.3686C1.56868 17.0686 1.97564 16.9 2.39999 16.9H12C12.4243 16.9 12.8313 17.0686 13.1314 17.3686C13.4314 17.6687 13.6 18.0756 13.6 18.5C13.6 18.9243 13.4314 19.3313 13.1314 19.6314C12.8313 19.9314 12.4243 20.1 12 20.1H2.39999C1.97564 20.1 1.56868 19.9314 1.26862 19.6314C0.968559 19.3313 0.799988 18.9243 0.799988 18.5Z" fill="#111928" />
                            </svg>
                          </>
                          : null}
                      </div>
                    </>
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        '#000000 px-3 py-2 rounded-md text-sm font-semibold w-36',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start hidden sm:flex">
                <div className="flex flex-shrink-0 items-center" style={{ marginRight: "0.5rem" }}>
                  <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2282 9.49999C10.2282 10.5438 9.81279 11.5435 9.07517 12.2809L3.71437 17.6407C3.62434 17.7307 3.53273 17.816 3.4348 17.8949C3.20103 18.0892 2.94673 18.2518 2.68138 18.3829C2.30704 18.1982 1.95797 17.9502 1.64681 17.6391C0.111544 16.1041 0.111544 13.6138 1.64681 12.0772L4.22454 9.49999L1.64839 6.92118C0.113124 5.38621 0.113124 2.89583 1.64839 1.35928C1.95955 1.04818 2.30862 0.80183 2.68138 0.617065C2.94989 0.749717 3.20577 0.913952 3.4427 1.10977C3.53589 1.18873 3.6275 1.27085 3.71437 1.3577L3.93076 1.57405L9.07517 6.71746C9.81437 7.45652 10.2282 8.45773 10.2282 9.49999Z" fill="#1F2A37" />
                  </svg>
                  <svg className='relative right-2 ' width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3469 14.4999C23.3469 22.1163 17.1506 28.3099 9.53428 28.3099H2.93831C2.05064 28.3099 1.24826 27.9593 0.655946 27.3892C0.646469 27.2929 0.643311 27.195 0.643311 27.0939C0.643311 24.9225 2.40445 23.1602 4.57783 23.1602H12.469C17.2454 23.1602 21.1325 19.2754 21.1325 14.4983C21.1325 9.72287 17.2454 5.8365 12.469 5.8365H4.57941C2.4076 5.8365 0.64489 4.0757 0.64489 1.90274C0.64489 1.80325 0.648049 1.70376 0.657526 1.60743C1.24984 1.03735 2.05222 0.686768 2.93989 0.686768H9.53428C17.1506 0.689926 23.3469 6.8835 23.3469 14.4999Z" fill="#1F2A37" />
                  </svg>
                </div>
                {signInDetails !== undefined ?
                  <>
                    <div style={{ position: "relative", top: "0.8rem", paddingRight: "1rem" }}>
                      <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.799988 2.49999C0.799988 2.07565 0.968559 1.66868 1.26862 1.36862C1.56868 1.06857 1.97564 0.899994 2.39999 0.899994H21.6C22.0243 0.899994 22.4313 1.06857 22.7314 1.36862C23.0314 1.66868 23.2 2.07565 23.2 2.49999C23.2 2.92434 23.0314 3.33131 22.7314 3.63136C22.4313 3.93142 22.0243 4.09999 21.6 4.09999H2.39999C1.97564 4.09999 1.56868 3.93142 1.26862 3.63136C0.968559 3.33131 0.799988 2.92434 0.799988 2.49999ZM0.799988 10.5C0.799988 10.0756 0.968559 9.66868 1.26862 9.36862C1.56868 9.06857 1.97564 8.89999 2.39999 8.89999H21.6C22.0243 8.89999 22.4313 9.06857 22.7314 9.36862C23.0314 9.66868 23.2 10.0756 23.2 10.5C23.2 10.9243 23.0314 11.3313 22.7314 11.6314C22.4313 11.9314 22.0243 12.1 21.6 12.1H2.39999C1.97564 12.1 1.56868 11.9314 1.26862 11.6314C0.968559 11.3313 0.799988 10.9243 0.799988 10.5ZM0.799988 18.5C0.799988 18.0756 0.968559 17.6687 1.26862 17.3686C1.56868 17.0686 1.97564 16.9 2.39999 16.9H12C12.4243 16.9 12.8313 17.0686 13.1314 17.3686C13.4314 17.6687 13.6 18.0756 13.6 18.5C13.6 18.9243 13.4314 19.3313 13.1314 19.6314C12.8313 19.9314 12.4243 20.1 12 20.1H2.39999C1.97564 20.1 1.56868 19.9314 1.26862 19.6314C0.968559 19.3313 0.799988 18.9243 0.799988 18.5Z" fill="#111928" />
                      </svg>
                    </div>
                    <input class="nosubmit" type="search" placeholder="Search" style={{
                      background: `transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center`,
                      width: "30vw",
                      height: "50px",
                      borderRadius: "16px",
                      border: "1px solid #E5E7EB",
                      padding: "9px 4px 9px 40px"
                    }} />
                  </>
                  : null}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-0 sm:static sm:inset-auto sm:ml-6 md:pr-2">
                {signInDetails !== undefined ?
                  <>
                    <button
                      type="button"
                      className="rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">View notifications</span>
                      <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00009 0.899994C7.09053 0.899994 5.25918 1.65856 3.90892 3.00883C2.55866 4.35909 1.80009 6.19044 1.80009 8.09999V12.4032L0.951686 13.2516C0.783915 13.4194 0.669667 13.6332 0.623386 13.866C0.577105 14.0987 0.600869 14.3399 0.691673 14.5592C0.782477 14.7784 0.936244 14.9658 1.13354 15.0977C1.33083 15.2295 1.56279 15.2999 1.80009 15.3H16.2001C16.4374 15.2999 16.6693 15.2295 16.8666 15.0977C17.0639 14.9658 17.2177 14.7784 17.3085 14.5592C17.3993 14.3399 17.4231 14.0987 17.3768 13.866C17.3305 13.6332 17.2163 13.4194 17.0485 13.2516L16.2001 12.4032V8.09999C16.2001 6.19044 15.4415 4.35909 14.0913 3.00883C12.741 1.65856 10.9096 0.899994 9.00009 0.899994ZM9.00009 20.1C8.04531 20.1 7.12963 19.7207 6.4545 19.0456C5.77937 18.3704 5.40009 17.4548 5.40009 16.5H12.6001C12.6001 17.4548 12.2208 18.3704 11.5457 19.0456C10.8705 19.7207 9.95486 20.1 9.00009 20.1Z" fill="#111928" />
                      </svg>

                    </button>
                    <div style={{ color: "#111928", fontSize: "16px", marginLeft: "0.3rem", fontWeight: "500" }}>{signInDetails.name}</div>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.410145 0.71021C0.672684 0.447751 1.02872 0.300309 1.39995 0.300309C1.77117 0.300309 2.12721 0.447751 2.38974 0.71021L6.99995 5.32041L11.6101 0.71021C11.7393 0.576496 11.8938 0.469841 12.0646 0.396468C12.2354 0.323095 12.4191 0.284475 12.605 0.282859C12.7909 0.281244 12.9752 0.316666 13.1473 0.387059C13.3193 0.457452 13.4756 0.561407 13.6071 0.692857C13.7385 0.824306 13.8425 0.980619 13.9129 1.15267C13.9833 1.32473 14.0187 1.50908 14.0171 1.69497C14.0155 1.88086 13.9769 2.06457 13.9035 2.23538C13.8301 2.40618 13.7235 2.56066 13.5897 2.68981L7.98974 8.28981C7.72721 8.55227 7.37117 8.69971 6.99995 8.69971C6.62872 8.69971 6.27268 8.55227 6.01015 8.28981L0.410145 2.68981C0.147686 2.42727 0.000244141 2.07124 0.000244141 1.70001C0.000244141 1.32878 0.147686 0.972749 0.410145 0.71021Z" fill="#111928" />
                          </svg>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {/* <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item> */}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </> :
                  <>
                    <svg className='h-2.5 w-5' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 13L5 9M5 9L9 5M5 9H19M14 13V14C14 14.7956 13.6839 15.5587 13.1213 16.1213C12.5587 16.6839 11.7956 17 11 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H11C11.7956 1 12.5587 1.31607 13.1213 1.87868C13.6839 2.44129 14 3.20435 14 4V5" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Link className="flex space-x-4 text-xs" to='/'>Login</Link><span className="flex space-x-4 text-xs">/</span><Link className="flex space-x-4 text-xs" to='/signup'>Register</Link>
                  </>}
              </div>
            </div>
            <hr />
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
