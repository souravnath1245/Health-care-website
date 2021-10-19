import React from "react";
import { useParams } from "react-router-dom";
import banner4 from '../../images/banner/banner-5.jpg';

const ServiceDetails = () => {
  const { title,details } = useParams();
  return (
    <div className='serviceDetails p-4 my-4'>
      <div className=" myContent my-4">
      <h1>{title}</h1>
            <h5>{details}</h5>
      </div>
        <div className="image">
            <img src={banner4} alt="" />
        </div>
        <div className="content container p-4">
          <h1>Our Hospital Always Provide Good Services</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, quaerat! Assumenda quasi vitae voluptate repudiandae laboriosam, adipisci corporis eos dolorem voluptatibus expedita facilis laudantium non eius. Harum in reprehenderit quaerat et expedita dicta sint magnam dolores iste ex at laboriosam sunt ducimus corporis est, perferendis nisi tempore unde corrupti esse asperiores maiores nobis laborum inventore. Animi accusamus vitae aut dolorem cumque eaque consectetur qui saepe provident pariatur libero rem consequatur corporis doloribus officia vel sint autem reprehenderit quidem, ea fugiat voluptatibus mollitia et. Necessitatibus autem accusantium repellendus delectus quisquam iure sequi voluptatem quos, molestiae id pariatur nisi accusamus, nostrum temporibus rerum libero veritatis illum. Aut sapiente quasi placeat cum perspiciatis nam expedita officia, cupiditate, ab porro suscipit quia ea a modi ducimus! Vero unde natus sapiente quam quo laboriosam reiciendis! Sunt, autem ullam! Optio vel repellat omnis, at culpa autem, accusantium in modi voluptatum a eum atque nisi consequuntur blanditiis quia ea tempore explicabo repellendus aspernatur nemo temporibus maxime quam? Eum corporis temporibus impedit voluptatibus. Aut consequatur velit voluptas obcaecati quae suscipit beatae eum placeat aliquam non consectetur quas vero veniam quia, quibusdam magni minima? Molestiae nobis tempore voluptatibus repudiandae quas, nihil possimus. Natus accusamus maiores dolore modi repudiandae necessitatibus?</p>
   

        </div>
    
      
    </div>
  );
};

export default ServiceDetails;
