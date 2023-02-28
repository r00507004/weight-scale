import React from "react";
import screenshot1Image from '../images/screenshot1.png';
import screenshot2Image from '../images/screenshot2.png';

const Screenshot: React.FC = () => {

  return (

    <div className="flex flex-col mt-32 ">
      <div className="text-lg font-bold mx-2">画面イメージ</div>
      <div className="text-base mt-4 mx-2">kintoneの機能を使うことで、データの一覧表示やグラフ表示が可能です。</div>
      <div className="flex flex-row flex-wrap ">
        <div className="flex flex-col flex-1 justify-center items-center min-w-[320px] mx-2 mt-4">
          <img src={screenshot1Image} className="object-contain h-full w-full p-4 bg-white"/>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center min-w-[320px] mx-2 mt-4">
          <img src={screenshot2Image} className="object-contain h-full w-full p-4 bg-white"/>
        </div>
      </div>
    </div>

  );
};

export default Screenshot;