import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjdfMjM4%2FMDAxNjIyMDg2NTY0NTU0.yFiBtJPrSDRLfZ7c3JfB2ClPTDHeFHY8g1SYtwuAcZ8g.ivZVXioRTRz7GvzpBHA4hrS_Cn7lYbYc5BtcsDa_AYUg.JPEG.mykim0403%2F20210526183327%25A3%25DFIMG%25A3%25DF1193.JPG&type=a340",
    rating: 5,
  },
  {
    id: 2,
    name: "oreo",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA2MjVfOTMg%2FMDAxNTkzMDc5NTEwODgy.vqeArMOkctlaH58uA8xA2pxZax1enrrWpPok0kRgzcgg.NnhIKUEne5lBFu3mhUTKFfkVYYw7C0m5T_W1EJr6TNYg.JPEG.tent3015%2F1593079510755.jpg&type=a340",
    rating: 4.3,
  },
  {
    id: 3,
    name: "pasta",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDFfNzUg%2FMDAxNjIyNTI0MjQzNjEw.9udUP1mStKTDuQ63GjBaWCj7gI7v1Rr9Et57z8UMNoYg.JkorDzlC7KZBtKZdAxc06LHRq0jHbrnfp7yaVZzC49Ag.JPEG.hapoom999%2FIMG_5242.jpg&type=a340",
    rating: 4.9,
  },
  {
    id: 4,
    name: "latte",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MzFfMjUy%2FMDAxNjIyNDY2MDgwNzU3.zQqG2TW5QLKo6OvqFSpm1zF1JCYfy7gnP6GBpUzBc60g.YFaUYmX30N5BBtwwRSkZkaL2T3j4_XLoxVS7QlIlqxMg.JPEG.aqua79%2FIMG_0781.jpg&type=a340",
    rating: 4,
  },
  {
    id: 5,
    name: "scone",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MjZfNzMg%2FMDAxNjIyMDM2OTMyMTI2.ZNIz59DyB8vbGuLIYnQ2zlHkVeBFFpJiMsDqnEhHrJUg.cOGtAiEZ8C_EMTuG5HHOvsF_eoz6DzottkS38P2Ok0Yg.JPEG.deann0533%2FIMG_6755.JPG&type=a340",
    rating: 3.6,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}
export default App;
