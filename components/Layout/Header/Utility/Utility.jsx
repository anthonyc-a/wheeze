import React from "react";
import { Utility } from "../../../styles/header.styled";

const UtilityComponent = () => {
  return (
    <Utility>
      <div className="filter">
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 6.5C0 6.36739 0.0526785 6.24021 0.146447 6.14645C0.240215 6.05268 0.367392 6 0.5 6H3.5C3.63261 6 3.75979 6.05268 3.85355 6.14645C3.94732 6.24021 4 6.36739 4 6.5C4 6.63261 3.94732 6.75979 3.85355 6.85355C3.75979 6.94732 3.63261 7 3.5 7H0.5C0.367392 7 0.240215 6.94732 0.146447 6.85355C0.0526785 6.75979 0 6.63261 0 6.5ZM0 3.5C0 3.36739 0.0526785 3.24021 0.146447 3.14645C0.240215 3.05268 0.367392 3 0.5 3H7.5C7.63261 3 7.75979 3.05268 7.85355 3.14645C7.94732 3.24021 8 3.36739 8 3.5C8 3.63261 7.94732 3.75979 7.85355 3.85355C7.75979 3.94732 7.63261 4 7.5 4H0.5C0.367392 4 0.240215 3.94732 0.146447 3.85355C0.0526785 3.75979 0 3.63261 0 3.5ZM0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526785 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759785 11.8536 0.853553C11.7598 0.947321 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947321 0.146447 0.853553C0.0526785 0.759785 0 0.632608 0 0.5Z"
            fill="black"
          />
        </svg>
        Filter
      </div>
      <div className="search">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_8_522)">
            <path
              d="M11.7419 10.344C12.7102 9.0227 13.1439 7.3845 12.9562 5.75716C12.7685 4.12982 11.9733 2.63335 10.7297 1.56714C9.48604 0.50093 7.88567 -0.0563875 6.24876 0.00668566C4.61184 0.0697588 3.05911 0.748571 1.90119 1.90732C0.743273 3.06606 0.0655718 4.61929 0.00366997 6.25624C-0.0582319 7.8932 0.500231 9.49317 1.56733 10.7361C2.63443 11.9789 4.13147 12.7731 5.75894 12.9596C7.38641 13.1461 9.0243 12.7112 10.3449 11.742H10.3439C10.3739 11.782 10.4059 11.82 10.4419 11.857L14.2919 15.707C14.4794 15.8946 14.7338 16.0001 14.9991 16.0002C15.2643 16.0003 15.5188 15.895 15.7064 15.7075C15.8941 15.52 15.9995 15.2656 15.9996 15.0004C15.9997 14.7351 15.8944 14.4806 15.7069 14.293L11.8569 10.443C11.8212 10.4068 11.7827 10.3734 11.7419 10.343V10.344ZM11.9999 6.50001C11.9999 7.22228 11.8577 7.93748 11.5813 8.60477C11.3049 9.27206 10.8997 9.87837 10.389 10.3891C9.87829 10.8998 9.27197 11.3049 8.60468 11.5813C7.93739 11.8577 7.22219 12 6.49992 12C5.77765 12 5.06245 11.8577 4.39516 11.5813C3.72787 11.3049 3.12156 10.8998 2.61083 10.3891C2.10011 9.87837 1.69498 9.27206 1.41858 8.60477C1.14218 7.93748 0.999921 7.22228 0.999921 6.50001C0.999921 5.04132 1.57938 3.64237 2.61083 2.61092C3.64228 1.57947 5.04123 1.00001 6.49992 1.00001C7.95861 1.00001 9.35756 1.57947 10.389 2.61092C11.4205 3.64237 11.9999 5.04132 11.9999 6.50001Z"
              fill="#151515"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_522">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="searchbar"></div>
    </Utility>
  );
};

export default UtilityComponent;