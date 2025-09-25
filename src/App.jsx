import image_1 from "./assets/image-2.jpg";
import image_2 from "./assets/image-3.jpg";
import image_3 from "./assets/image-4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function App() {
  const testimonials = [
    {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
        {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
        {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
        {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
        {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
        {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
        {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },
        {
      name: "Michael",
      company: "MDS Manufacturing",
      image: { image_3 },
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.",
    },


  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container mt-6 ">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-amber-100 rounded-lg shadow p-6 flex flex-col items-center text-center space-y-4 m-6"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div className="text-blue-600 text-4xl leading-none mb-2">“</div>
            <p className="text-gray-700 text-sm mb-4">{testimonial.quote}</p>
            <div className="font-semibold text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-gray-500 italic text-sm">
              {testimonial.company}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
  /** 
   *         {testimonials.map((testimonial, index) => (
           <Slider {...settings}>
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <div className="text-blue-600 text-4xl leading-none mb-2">“</div>
            <p className="text-gray-700 text-sm mb-4">{testimonial.quote}</p>
            <div className="font-semibold text-gray-900">
              {testimonial.name}
            </div>
            <div className="text-gray-500 italic text-sm">
              {testimonial.company}
            </div>
          </div>
          </Slider>
        ))}
   */
}

export default App;
