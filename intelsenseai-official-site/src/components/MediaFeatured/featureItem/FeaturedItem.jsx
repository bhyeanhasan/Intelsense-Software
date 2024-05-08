import "./FeaturedItem.scss";

import { HiChevronDoubleRight } from "react-icons/hi";

 const FeaturedItem = ({link,title}) => {
  return (
    <li className="featured-item">
        <HiChevronDoubleRight className="icon" />
        <a href={link} target="_blank" rel="noopener noreferrer" className="link title">
        {title}
      </a>
    </li>
  )
}

export default FeaturedItem
