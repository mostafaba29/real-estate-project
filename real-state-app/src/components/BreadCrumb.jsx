/* eslint-disable react/prop-types */
import '../assets/styles/components/breadCrumb.style.scss';
export default function BreadCrumb ({
    items, 
    separator = <i className="fa-solid fa-angle-right" />
}){
    return (
        <div className="breadcrumb">
        {items.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <a 
                href={item.href} 
                className={` ${
                  index === 0 ? 'breadcrumbhome' : 'breadcrumbproperty'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
            
            {/*seperator*/}
            {index < items.length - 1 && (
              <span>
                {separator}
              </span>
            )}
          </div>
        ))}
      </div>
    )
}