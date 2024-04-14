import { convertEnglishToRussian } from "@/utils/formateFileType";
import { Loader, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"

type ClassifiedFilesProps = {
  classifiedFiles: {[key: string]: string};
  isFilesClassifying: boolean
};

const ClassifiedFiles = ({classifiedFiles, isFilesClassifying}: ClassifiedFilesProps) => { 
  return (
    <div className="flex flex-col w-full">
      <p className="text-center text-lg font-semibold p-3">Результат классификации</p>
      {isFilesClassifying && <div className="flex justify-center items-center w-full"><Loader className="animate-spin" size={25} /></div>}{Object.entries(classifiedFiles).map(([fileName, fileType]) => (
      <div key={fileName} className="flex justify-between gap-x-6 py-3 my-1 border-y-2 border-dashed border-zinc-400">
        <p className="text-zinc-600 font-semibold max-w-[60%] md:max-w-[80%] line-clamp-2">{fileName}</p> 
        <p className="text-zinc-600 font-bold">{convertEnglishToRussian(fileType)}</p>
      </div>
    ))}
    </div>
  )
}

export default ClassifiedFiles;