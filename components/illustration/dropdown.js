import React from 'react'

function Dropdown({className, color}) {
    return (
        <svg width="11" height="7" className={className} viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.293031 0.542959C0.480558 0.355488 0.734866 0.250173 1.00003 0.250173C1.26519 0.250173 1.5195 0.355488 1.70703 0.542959L5.00003 3.83596L8.29303 0.542959C8.38528 0.447449 8.49562 0.371267 8.61763 0.318858C8.73963 0.266449 8.87085 0.238862 9.00363 0.237709C9.13641 0.236555 9.26809 0.261856 9.39098 0.312137C9.51388 0.362418 9.62553 0.436671 9.71943 0.530564C9.81332 0.624457 9.88757 0.736109 9.93785 0.859005C9.98813 0.981901 10.0134 1.11358 10.0123 1.24636C10.0111 1.37914 9.98354 1.51036 9.93113 1.63236C9.87872 1.75437 9.80254 1.86471 9.70703 1.95696L5.70703 5.95696C5.5195 6.14443 5.26519 6.24975 5.00003 6.24975C4.73487 6.24975 4.48056 6.14443 4.29303 5.95696L0.293031 1.95696C0.10556 1.76943 0.000244141 1.51512 0.000244141 1.24996C0.000244141 0.984795 0.10556 0.730487 0.293031 0.542959Z" fill={color} />
        </svg>
  )
}

export default Dropdown;
