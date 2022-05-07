import React, { useState } from "react";
import { Popover } from "@headlessui/react";
import { Camera, ChatTeardropDots, Heart, Trash } from "phosphor-react";
import { FeedbackTypes, FeedbackTypeType } from "../../@types";
import { FeedbackContent } from "./Content";
import success from "../../Assets/img/Success.svg";
import html2canvas from "html2canvas";
import { Loading } from "../Loading";
export function Feedback(): JSX.Element {
  const [selectedType, setSelectedType] = useState<FeedbackTypeType>(
    {} as FeedbackTypeType
  );
  const [feedbackInput, setfeedbackInput] = useState("");
  const handleSelectType = (type: FeedbackTypeType) => {
    setSelectedType(type);
  };
  const [sended, setSended] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screenshot, setScreenshot] = useState("");
  const takeScreenshot = async () => {
    setLoading(true);
    const image = await html2canvas(document.querySelector("html")!, {
      allowTaint: true,
      useCORS: true,
    });
    setScreenshot(image.toDataURL("image/png"));
    setLoading(false);
  };
  const resetAll = () => {
    setSended(false);
    setfeedbackInput("");
    setSelectedType({} as FeedbackTypeType);
    setScreenshot("");
  };
  return (
    <Popover className="absolute bottom-5 right-5 group flex flex-col">
      <Popover.Panel className="flex flex-col w-96 justify-between rounded-xl mb-4 h-[300px] relative text-center bg-primary-50 dark:bg-dark-900 text-primary-900 dark:text-primary-900 p-4 pb-0">
        {sended ? (
          <div className="flex flex-col items-center h-full justify-center">
            <img src={success} alt="imagem de sucesso" />
            <span className="text-[30px]">Agradecemos o feedback!</span>
            <button
              onClick={() => {
                resetAll();
              }}
              className="p-2 bg-primary-200 dark:bg-dark-800 hover:bg-primary-500 dark:hover:bg-dark-500 transition-colors w-1/2 m-2 rounded"
            >
              Quero enviar outro
            </button>
          </div>
        ) : (
          <FeedbackContent
            handleBack={
              selectedType.name
                ? () => {
                    resetAll();
                  }
                : undefined
            }
            title={
              (selectedType.name && (
                <span className="flex justify-center">
                  <img
                    className="w-6 h-6 mr-1"
                    src={selectedType.image.src}
                    alt={selectedType.image.alt}
                  />
                  {selectedType.name}
                </span>
              )) || (
                <span>
                  Deixe seu <b>feedback</b>!
                </span>
              )
            }
          >
            {selectedType.name ? (
              <div className="flex flex-col w-full">
                <textarea
                  value={feedbackInput}
                  onChange={(e) => setfeedbackInput(e.target.value)}
                  className="p-2 min-w-[304px] w-full min-h-[112px] border-2  resize-none scrollbar-thin dark:bg-dark-700 dark:text-primary-900 scrollbar-thumb-primary-900 scrollbar-track-transparent border-gray-500 focus:border-transparent focus:ring-1 focus:ring-primary-900 focus:ring-offset-1 ring-offset-current outline-none rounded"
                  placeholder={selectedType.description}
                  disabled={loading}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    disabled={loading}
                    style={{
                      backgroundImage: screenshot
                        ? `url('${screenshot}')`
                        : "none",
                      backgroundPosition: "right bottom",
                      backgroundSize: "cover",
                    }}
                    className="w-14 h-14 flex relative bg-primary-50 dark:bg-dark-900 dark:hover:bg-dark-800 items-center justify-center border-2 border-primary-900 hover:bg-primary-200 transition-all duration-200 rounded-md"
                  >
                    {loading ? (
                      <Loading />
                    ) : (
                      <>
                        {screenshot ? (
                          <Trash
                            onClick={() => {
                              setScreenshot("");
                            }}
                            weight="bold"
                            className="text-primary-900 absolute right-[0.1rem] bottom-[0.1rem] text-[22px]"
                          />
                        ) : (
                          <span
                            onClick={takeScreenshot}
                            className="w-full h-full flex items-center justify-center"
                          >
                            <Camera
                              weight="bold"
                              className="text-primary-900 text-[22px]"
                            />
                          </span>
                        )}
                      </>
                    )}
                  </button>
                  <button
                    disabled={loading || feedbackInput.trim().length <= 0}
                    className="flex-1 disabled:bg-primary-200 disabled:border-gray-400 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-2 py-4 h-14 bg-primary-900 rounded text-primary-50 hover:bg-primary-500 hover:text-primary-900 transition-colors duration-200"
                    onClick={() => {
                      setSended(true);
                    }}
                  >
                    {loading ? (
                      <Loading customClass="mx-auto" />
                    ) : (
                      "Enviar feedback"
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <>
                {FeedbackTypes.map((feedback) => (
                  <div
                    key={feedback.name}
                    className="p-4 w-32 h-40 rounded cursor-pointer bg-primary-100 dark:bg-dark-800 dark:hover:bg-dark-700 hover:bg-primary-200 hover:border-primary-900  border-2 border-transparent  transition-colors duration-200 flex flex-col items-center justify-between"
                    onClick={() => handleSelectType(feedback)}
                  >
                    <img
                      className="h-20"
                      src={feedback.image.src}
                      alt={feedback.image.alt}
                    />
                    <span className="">{feedback.name}</span>
                  </div>
                ))}
              </>
            )}
          </FeedbackContent>
        )}
        <footer className="p-2">
          <span className="text-xs block ">
            Feito com <Heart className="inline-block" weight="fill" /> por{" "}
            <a className="underline" href="https://kayooliveira.com">
              Kayo Oliveira
            </a>
          </span>
        </footer>
      </Popover.Panel>
      <Popover.Button className=" overflow-hidden hover:text-primary-900 w-fit self-end flex items-center bg-primary-900 text-primary-50 hover:bg-primary-300 transition-colors rounded-full p-4">
        <ChatTeardropDots size="20" weight="bold" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-active:max-w-xs transition-all ease-linear duration-300">
          <span className="pl-2 "></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
