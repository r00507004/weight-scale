import React from "react";

interface Props {
  headline: string;
  sentence: string;
  image: string;
}

const Feature: React.FC<Props> = ({headline, sentence, image}) => {
  return (
    <div className="flex flex-col flex-1 min-w-[320px] mx-2 my-2 p-4 bg-white rounded-lg shadow-lg">
      <div className="text-lg font-bold">{headline}</div>
      <div className="text-base mt-4">{sentence}</div>
      <div className="flex justify-center items-end w-full h-full mt-4">
        <img src={image} className="object-contain h-full w-full max-h-48 p-4 bg-gray-100"/>
      </div>
    </div>
    );
};

export default Feature;