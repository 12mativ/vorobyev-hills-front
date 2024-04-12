"use client";

import FileUpload from "@/components/file-upload";
import { Link2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isChoosingFiles, setIsChoosingFiles] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center overflow-y-auto h-full p-2">
      <div className="flex flex-col p-4 rounded-lg bg-zinc-100 md:max-w-[55%]">
        <Link href="/archive" className="flex items-center w-fit gap-x-1 text-sky-700 text-lg underline pb-3">
          <p>В архив</p>
          <Link2 size={20} />
        </Link>
        {isChoosingFiles ? (
          <>
            <p className="text-sm text-zinc-700 w-[80%]">
              Выберите файлы, которые необходимо классифицировать
            </p>
            <FileUpload setIsChoosingFiles={setIsChoosingFiles} />
          </>
        ) : (
          <div>готовый результат классификации</div>
        )}
      </div>
    </div>
  );
}
