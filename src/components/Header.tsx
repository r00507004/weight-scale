import React from "react";

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  return (
    <div className="flex flex-row items-center h-16 mx-2">
      <div className="text-2xl font-bold">{title}</div>
    </div>
  );
};

export default Header;