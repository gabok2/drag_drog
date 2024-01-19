"use client";

import useWindowDimensions from "@/utils";

export function TaskBoard() {
  const { width, height, isLoaded } = useWindowDimensions();
  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex flex-nowrap overflow-x-auto  space-x-4 hide-scrollbar">
      <div
        style={{ width: width * 0.75 }}
        className="bg-[#403A64]  rounded-2xl px-4 pb-4 flex-shrink-0"
      >
        <h1 className="text-white text-base font-bold pt-5 pb-4">
          Não iniciada
        </h1>

        <div
          style={{ maxHeight: height * 0.7 }}
          className="flex flex-col gap-2 mt-2 overflow-y-auto hide-scrollbar"
        >
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste
            </p>
          </div>

          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ width: width * 0.75 }}
        className="bg-[#403A64]  rounded-2xl px-4 pb-4 flex-shrink-0"
      >
        <h1 className="text-white text-base font-bold pt-5 pb-4">
          Não iniciada
        </h1>

        <div
          style={{ maxHeight: height * 0.7 }}
          className="flex flex-col gap-2 mt-2 overflow-y-auto hide-scrollbar"
        >
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>

          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ width: width * 0.75 }}
        className="bg-[#403A64]  rounded-2xl px-4 pb-4 flex-shrink-0"
      >
        <h1 className="text-white text-base font-bold pt-5 pb-4">
          Não iniciada
        </h1>

        <div
          style={{ maxHeight: height * 0.7 }}
          className="flex flex-col gap-2 mt-2 overflow-y-auto hide-scrollbar"
        >
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>

          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ width: width * 0.75 }}
        className="bg-[#403A64]  rounded-2xl px-4 pb-4 flex-shrink-0"
      >
        <h1 className="text-white text-base font-bold pt-5 pb-4">
          Não iniciada
        </h1>

        <div
          style={{ maxHeight: height * 0.7 }}
          className="flex flex-col gap-2 mt-2 overflow-y-auto hide-scrollbar"
        >
          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste
            </p>
          </div>

          <div className="rounded-lg bg-[#625A96]">
            <p className="text-[#D5D6FA] text-sm font-normal text-center truncate  pt-2 pb-4 px-4  whitespace-nowrap ">
              Teste now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
