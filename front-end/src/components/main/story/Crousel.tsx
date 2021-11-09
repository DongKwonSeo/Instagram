import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import { Story } from "../../../interfaces/interface";
import StoryItem from "./item";
interface Props {
  list: Story[];

  onToggleConfirmState: (selectedId: number) => void;
}

function SamplePrevArrow({ buttonState, onClick }: any) {
  return (
    <>
      {buttonState ? (
        <button className="arrowPrev" onClick={onClick}>
          <img
            className="arrowPrev__img"
            src="../imgs/arrow-prev.png"
            alt="이전"
          />
        </button>
      ) : null}
    </>
  );
}

function SampleNextArrow({ buttonState, onClick }: any) {
  return (
    <>
      {buttonState ? (
        <button className="arrowNext" onClick={onClick}>
          <img
            className="arrowNext__img"
            src="../imgs/arrow-next.png"
            alt="다음"
          />
        </button>
      ) : null}
    </>
  );
}

const StoyCrousel = ({ list, onToggleConfirmState }: Props) => {
  const [nextButtonState, setNextButtonState] = useState<boolean>(false);
  const [prevButtonState, setPrevButtonState] = useState<boolean>(false);

  const MIN_LENGTH = 8;
  const totalIndex = useMemo(() => list.length, [list]);
  const lastIndex = useMemo(() => totalIndex - MIN_LENGTH, [totalIndex]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: MIN_LENGTH,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow buttonState={nextButtonState} />,
    prevArrow: <SamplePrevArrow buttonState={prevButtonState} />,
    afterChange: (current: number) => {
      !current ? setPrevButtonState(false) : setPrevButtonState(true);
      lastIndex === current
        ? setNextButtonState(false)
        : setNextButtonState(true);
    },
  };

  useEffect(() => {
    if (totalIndex > MIN_LENGTH) {
      setNextButtonState(true);
    }
  }, [totalIndex]);

  return (
    <Slider {...settings}>
      {list.map((item, index) => (
        <StoryItem
          item={item}
          key={index}
          onToggleConfirmState={onToggleConfirmState}
        />
      ))}
    </Slider>
  );
};

export default StoyCrousel;
