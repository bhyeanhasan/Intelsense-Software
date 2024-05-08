// IntelsenseAI Featured Stories
import { mediaFeatures } from "../../utils/MediaFeaturedData";
import "./MediaFeatured.scss"
import FeaturedItem from "./featureItem/FeaturedItem";
const MediaFeatured = () => {
  return (
    <section className="media-feature-wrapper base-background py-5">
        <div className="main">
          <div className="container-lg">
            <div className="row">
              <h2 className="heading fw-bold white">
              IntelsenseAI Featured Stories
              </h2>
              <div className="col-12 my-5">
               <ul >
                {mediaFeatures.map((news) => <FeaturedItem key={news.id} title={news.title} link={news.link} />)}
               </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default MediaFeatured

  