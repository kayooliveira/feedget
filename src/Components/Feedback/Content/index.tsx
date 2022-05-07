import React from "react";
import { FeedbackTypes } from "../../../@types";
import { Popover } from "@headlessui/react";
import { X, Heart, ArrowLeft, CircleHalf, Sun } from "phosphor-react";
interface FeedbackContentProps {
  title: string | JSX.Element;
  children: React.ReactNode;
  handleBack?: () => void;
}

export function FeedbackContent({
  title,
  children,
  handleBack,
}: FeedbackContentProps): JSX.Element {
  return (
    <div>
      <header>
        {handleBack && (
          <button onClick={handleBack} className="absolute left-4 top-5">
            <ArrowLeft weight="bold" />
          </button>
        )}
        <span className="text-md">{title}</span>
        <Popover.Button onClick={handleBack} className="absolute top-5 right-4">
          <X weight="bold" />
        </Popover.Button>
        <hr className="border-primary-100 my-2" />
      </header>
      <div className=" mt-2 flex flex-row gap-2 ">{children}</div>
    </div>
  );
}
