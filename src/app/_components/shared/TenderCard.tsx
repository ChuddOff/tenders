import React from "react";
import { CiStar } from "react-icons/ci";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { FaHandshakeSimple } from "react-icons/fa6";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  // TODO: remove this
  showCost?: boolean;
  showStatus?: boolean;
  showLeftDays?: boolean;
  showCheckbox?: boolean;
  showPlacment?: boolean;
  showPinStar?: boolean;
  titleClassname?: string;
  topContainerClassname?: string;
}

export default function TenderCard({
  showCost = true,
  showCheckbox = true,
  showLeftDays = true,
  showPlacment = true,
  showStatus = true,
  showPinStar = true,
  ...props
}: Props) {
  return (
    <div
      className={`flex ${props.className ?? ""} flex-col items-start gap-7 rounded-md`}
    >
      <div
        className={`flex flex-wrap ${props.topContainerClassname ?? ""} items-start gap-7`}
      >
        <div className="flex gap-4">
          {showPinStar && <CiStar size={30} />}
          <div>
            <h1
              className={`mb-3 font-comfortaa text-base ${props.titleClassname ?? ""}`}
            >
              Уголь коммунально-бытовой для производственных нужд
            </h1>
            <p>
              <span className="text-lime-100">Регион:</span> Не задан
            </p>
            {showPlacment && (
              <p>
                <span className="text-lime-100">Место поставки:</span> Територия
                заказчика
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {showCost && (
            <p className="flex items-center gap-2 whitespace-nowrap font-comfortaa">
              <GrMoney size={20} className="text-lime-600" /> Не указана
            </p>
          )}
          {showStatus && (
            <p className="flex items-center gap-2 whitespace-nowrap font-comfortaa">
              Статус: Опубликован
            </p>
          )}
          <p className="flex items-center gap-2 whitespace-nowrap font-comfortaa">
            <FaHandshakeSimple size={20} className="text-lime-600" /> Стать
            партнером
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {showCheckbox && <RiCheckboxCircleFill size={20} />}
        <div className="flex items-center gap-4 font-comfortaa">
          <div className="flex items-center gap-1">
            <p>30.09.2020</p>
            <p>-</p>
            <p>30.09.2020</p>
          </div>
          {showLeftDays && <p>Остался 31 день</p>}
        </div>
      </div>
    </div>
  );
}
