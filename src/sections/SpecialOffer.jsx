import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-red-400"> Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quisquam
          hic maxime magni saepe, non doloremque et similique quod animi, totam
          perferendis deleniti ipsa ipsam in dolorem. Cupiditate, quam
          necessitatibus
        </p>
        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="View details" />
          <Button label="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
