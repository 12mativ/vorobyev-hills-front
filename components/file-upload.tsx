"use client";

import { ChevronRight, Trash } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { v4 as uuidv4 } from 'uuid';

const FileUpload = ({setIsChoosingFiles}: { setIsChoosingFiles: Dispatch<SetStateAction<boolean>> }) => {
  const [files, setFiles] = useState<{id: string, file: File}[]>([]);

  const handleFileChange = (e: any) => {
    const newFiles = Array.from(e.target.files as File[]).map((file: File) => ({id: uuidv4(), file: file}))
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileDelete = (idToDelete: string) => {
    setFiles((prevFiles) =>
      prevFiles.filter((file) => file.id !== idToDelete)
    );
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-2">
        <label
          className="block w-[180px] p-3 text-center bg-cyan-700 text-zinc-300 rounded-lg m-2 cursor-pointer hover:bg-cyan-600 transition"
          htmlFor="document-file"
        >
          {files.length > 0 ? "Добавить файлы..." : "Выбрать файлы..."}
        </label>
        <input
          type="file"
          id="document-file"
          multiple
          onChange={handleFileChange}
          hidden
        />
      </div>

      <ScrollArea className="h-72 pr-2">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between py-3 my-1 border-y-2 border-dashed border-zinc-400">
            <p className="max-w-[80%] line-clamp-2">{file.file.name}</p>
            <Trash onClick={() => handleFileDelete(file.id)} className="text-rose-500 w-7 h-7 cursor-pointer" />
          </div>
        ))}
      </ScrollArea>

      {files.length > 0 && (
        <div className="mt-5 flex justify-end">
          <Button
            className="flex items-center group bg-zinc-300 ml-auto text-black hover:bg-zinc-400"
            onClick={() => {
              console.log(files)
              //todo back request
              setIsChoosingFiles(prevState => !prevState)
            }}
          >
            <p>Подтвердить</p>
            <ChevronRight className="text-zinc-500 group-hover:translate-x-1 transition" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
