import './App.css';

function App() {
  return (
    <>
      {/* header site */}
      <header >
        <ul className='site-header'>
          <li className="nav-styls">
            <a>
              MESSENGER
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#005354" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V10C15 10.2652 14.8946 10.5196 14.7071 10.7071C14.5196 10.8946 14.2652 11 14 11H11.5C11.1895 11 10.8833 11.0723 10.6056 11.2111C10.3279 11.35 10.0863 11.5516 9.9 11.8L8 14.333L6.1 11.8C5.91371 11.5516 5.67214 11.35 5.39443 11.2111C5.11672 11.0723 4.81049 11 4.5 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V10C0 10.5304 0.210714 11.0391 0.585786 11.4142C0.960859 11.7893 1.46957 12 2 12H4.5C4.65525 12 4.80836 12.0361 4.94721 12.1056C5.08607 12.175 5.20685 12.2758 5.3 12.4L7.2 14.933C7.29315 15.0572 7.41393 15.158 7.55279 15.2274C7.69164 15.2969 7.84475 15.333 8 15.333C8.15524 15.333 8.30836 15.2969 8.44721 15.2274C8.58607 15.158 8.70685 15.0572 8.8 14.933L10.7 12.4C10.7931 12.2758 10.9139 12.175 11.0528 12.1056C11.1916 12.0361 11.3448 12 11.5 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0H2Z" />
              </svg>
            </a>
          </li>
          <li className="nav-styls">
            <a>
              EXPLORE
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#005354" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.742 10.344C12.7103 9.02267 13.144 7.38447 12.9563 5.75713C12.7686 4.12979 11.9734 2.63332 10.7298 1.56711C9.48612 0.500899 7.88575 -0.056418 6.24884 0.00665514C4.61192 0.0697283 3.05918 0.74854 1.90127 1.90729C0.743351 3.06603 0.0656505 4.61925 0.00374865 6.25621C-0.0581532 7.89317 0.500309 9.49314 1.56741 10.736C2.63451 11.9789 4.13154 12.773 5.75902 12.9596C7.38649 13.1461 9.02438 12.7112 10.345 11.742H10.344C10.374 11.782 10.406 11.82 10.442 11.857L14.292 15.707C14.4795 15.8946 14.7339 16.0001 14.9991 16.0002C15.2644 16.0003 15.5189 15.895 15.7065 15.7075C15.8941 15.52 15.9996 15.2656 15.9997 15.0003C15.9998 14.7351 15.8945 14.4806 15.707 14.293L11.857 10.443C11.8212 10.4068 11.7828 10.3744 11.742 10.344ZM12 6.49998C12 7.22225 11.8577 7.93745 11.5813 8.60474C11.3049 9.27203 10.8998 9.87834 10.3891 10.3891C9.87837 10.8998 9.27205 11.3049 8.60476 11.5813C7.93747 11.8577 7.22227 12 6.5 12C5.77773 12 5.06253 11.8577 4.39524 11.5813C3.72795 11.3049 3.12163 10.8998 2.61091 10.3891C2.10019 9.87834 1.69506 9.27203 1.41866 8.60474C1.14226 7.93745 1 7.22225 1 6.49998C1 5.04129 1.57946 3.64234 2.61091 2.61089C3.64236 1.57944 5.04131 0.999978 6.5 0.999978C7.95869 0.999978 9.35764 1.57944 10.3891 2.61089C11.4205 3.64234 12 5.04129 12 6.49998Z" />
              </svg>
            </a>
          </li>
          <li className="nav-styls">
            <a>
              PROJECT
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#005354" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1V4H1V1H6ZM1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5H6C6.26522 5 6.51957 4.89464 6.70711 4.70711C6.89464 4.51957 7 4.26522 7 4V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0H1ZM15 12V15H10V12H15ZM10 11C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12V15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16H15C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15V12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11H10ZM6 8V15H1V8H6ZM1 7C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8V15C0 15.2652 0.105357 15.5196 0.292893 15.7071C0.48043 15.8946 0.734784 16 1 16H6C6.26522 16 6.51957 15.8946 6.70711 15.7071C6.89464 15.5196 7 15.2652 7 15V8C7 7.73478 6.89464 7.48043 6.70711 7.29289C6.51957 7.10536 6.26522 7 6 7H1ZM15 1V8H10V1H15ZM10 0C9.73478 0 9.48043 0.105357 9.29289 0.292893C9.10536 0.48043 9 0.734784 9 1V8C9 8.26522 9.10536 8.51957 9.29289 8.70711C9.48043 8.89464 9.73478 9 10 9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0H10Z" />
              </svg>
            </a>
          </li>
          <li className="nav-styls">
            <a>
              PROFILE
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#005354" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8C9.06087 8 10.0783 7.57857 10.8284 6.82843C11.5786 6.07828 12 5.06087 12 4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4C4 5.06087 4.42143 6.07828 5.17157 6.82843C5.92172 7.57857 6.93913 8 8 8ZM10.6667 4C10.6667 4.70724 10.3857 5.38552 9.88562 5.88562C9.38552 6.38572 8.70724 6.66667 8 6.66667C7.29276 6.66667 6.61448 6.38572 6.11438 5.88562C5.61428 5.38552 5.33333 4.70724 5.33333 4C5.33333 3.29276 5.61428 2.61448 6.11438 2.11438C6.61448 1.61428 7.29276 1.33333 8 1.33333C8.70724 1.33333 9.38552 1.61428 9.88562 2.11438C10.3857 2.61448 10.6667 3.29276 10.6667 4ZM16 14.6667C16 16 14.6667 16 14.6667 16H1.33333C1.33333 16 0 16 0 14.6667C0 13.3333 1.33333 9.33333 8 9.33333C14.6667 9.33333 16 13.3333 16 14.6667ZM14.6667 14.6613C14.6653 14.3333 14.4613 13.3467 13.5573 12.4427C12.688 11.5733 11.052 10.6667 8 10.6667C4.94667 10.6667 3.312 11.5733 2.44267 12.4427C1.53867 13.3467 1.336 14.3333 1.33333 14.6613H14.6667Z" />
              </svg>
            </a>
          </li>
          <li className="nav-styls">
            <a>
              WALLET
              <svg width="17" height="16" viewBox="0 0 17 16" fill="#005354" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8945 0.0487381C13.1294 -0.0113716 13.3745 -0.0159429 13.6114 0.0353712C13.8483 0.0866852 14.0706 0.192536 14.2615 0.344887C14.4524 0.497239 14.6069 0.692086 14.7132 0.914637C14.8195 1.13719 14.8748 1.38159 14.875 1.6293V2.95549H15.4062C15.8289 2.95549 16.2343 3.12728 16.5332 3.43307C16.8321 3.73886 17 4.1536 17 4.58605V14.3694C17 14.8019 16.8321 15.2166 16.5332 15.5224C16.2343 15.8282 15.8289 16 15.4062 16H1.59375C1.17106 16 0.765685 15.8282 0.466799 15.5224C0.167913 15.2166 1.04221e-07 14.8019 1.04221e-07 14.3694V4.58605C-0.000148177 4.1663 0.157933 3.76265 0.441339 3.45913C0.724745 3.15561 1.11164 2.97561 1.5215 2.95658L12.8945 0.0487381ZM5.90962 2.95549H13.8125V1.6293C13.8123 1.54683 13.7938 1.46549 13.7583 1.39143C13.7229 1.31737 13.6714 1.25254 13.6078 1.20184C13.5443 1.15114 13.4702 1.11591 13.3914 1.09882C13.3125 1.08172 13.2309 1.08321 13.1527 1.10317L5.90962 2.95549ZM1.59375 4.04253C1.45285 4.04253 1.31773 4.0998 1.2181 4.20173C1.11847 4.30366 1.0625 4.4419 1.0625 4.58605V14.3694C1.0625 14.5136 1.11847 14.6518 1.2181 14.7538C1.31773 14.8557 1.45285 14.913 1.59375 14.913H15.4062C15.5471 14.913 15.6823 14.8557 15.7819 14.7538C15.8815 14.6518 15.9375 14.5136 15.9375 14.3694V4.58605C15.9375 4.4419 15.8815 4.30366 15.7819 4.20173C15.6823 4.0998 15.5471 4.04253 15.4062 4.04253H1.59375Z" />
              </svg>
            </a>
          </li>
        </ul>
      </header>
      {/*end header site */}

      <section  className="section-card section-position ">
        <main className='container'>
          <div className=" card">
            <div className=" card-header ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className='btn'>KNOW MORE</button>
          </div>
          <div className=" card double-height">
            <div className=" card-header ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <span className='discrip'>DISCRIPTION</span>
            <div className='btn-border'> <button className='btn '>SEND REQUEST</button></div>
          </div>
          <div className=" card">
            <div className=" card-header  ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className='btn'>KNOW MORE</button>
          </div>
          <div className=" card">
            <div className=" card-header ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span> NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className='btn'>KNOW MORE</button>
          </div>
          <div className=" card">
            <div className=" card-header ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className='btn'>KNOW MORE</button>
          </div>
          <div className=" card">
            <div className=" card-header ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className='btn'>KNOW MORE</button>
          </div>
          <div className=" card">
            <div className=" card-header  ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className='btn'>KNOW MORE</button>
          </div>
          <div className=" card">
            <div className=" card-header ">
              <img className='card-img' src={"./img/halloween.png"} alt="" />
              <div className='header-details'>
                <div className=" card-header">
                  <h2 className="card-title">KAYLAY GUNNER</h2>
                  <svg width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" fill="#005354" />
                  </svg>
                </div>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <p className="card-text">PROFESSIONAL DESIGNER FOR MODELING AND RENDERING WALOR DISNEY</p>
              </div>
            </div>
            <table className='list-group'>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>SwitZerland</h3>
                    </div>
                    <span>COUNTRY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Full-Time</h3>
                    </div>
                    <span>COOPRATION TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Designer</h3>
                    </div>
                    <span>CATEGORY</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>CITY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>Male</h3>
                    </div>
                    <span>GENDER</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>24 Months</h3>
                    </div>
                    <span>MIN EXPERIENCE</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span> NATIVE LANGUAGE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 12.00 Hour</h3>
                    </div>
                    <span>MINIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>8:00 AM GMT +2</h3>
                    </div>
                    <span>STARTING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr >
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>In Person</h3>
                    </div>
                    <span>CONTRACT TYPE</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>$ 24.00 Hour</h3>
                    </div>
                    <span>MAXIMUM SALARY</span>
                  </div>
                  <div className='border-item'></div>
                </td>
                <td className='list-group-td'>
                  <div>
                    <div className=' list-group-titel'>
                      <h3 className='card-title'>17:00 PM GMT +2</h3>
                    </div>
                    <span>ENDING HOURS</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                    <span>REQUIRED SKILLS</span>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
                <td className='list-group-td-last'>
                  <div>
                    <div className=' list-group-titel'>
                      <img className=' card-img-top ' src={"./img/swiss.png"} alt="" />
                      <h3 className='card-title'>Montenegro</h3>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
            <button className='btn'>KNOW MORE</button>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
