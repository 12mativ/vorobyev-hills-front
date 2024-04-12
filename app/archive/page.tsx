"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2 } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/hooks/redux-hooks";
import { useEffect, useState } from "react";
import { IDocument } from "@/lib/features/documents/documentsSlice";

const Page = () => {
  const [searchDocumentName, setSearchDocumentName] = useState("");
  const [searchDocumentType, setSearchDocumentType] = useState("");

  let documents = useAppSelector((state) =>
    state.documentsReducer.documents.filter(
      (document) =>
        document.name.indexOf(searchDocumentName) != -1 &&
        document.type === searchDocumentType
    )
  );

  return (
    <div className="p-2">
      <div className="bg-zinc-100 p-3 rounded-lg w-full">
        <Link
          href="/"
          className="flex items-center w-fit gap-x-1 text-sky-700 text-lg underline pb-3"
        >
          <p>На главную страницу</p>
          <Link2 size={20} />
        </Link>

        <div className="flex flex-col md:flex-row md:gap-x-3 gap-y-3 items-center justify-center">
          <div className="md:flex-1 w-full">
            <Label htmlFor="document-name">Название документа</Label>
            <Input
              id="document-name"
              placeholder="Название документа"
              className="border-transparent focus:border-transparent focus:ring-0"
              value={searchDocumentName}
              onChange={(e) => setSearchDocumentName(e.target.value)}
            />
          </div>
          <div className="md:flex-2 md:w-auto w-full">
            <Label htmlFor="document-name">Название документа</Label>
            <Select onValueChange={(e) => setSearchDocumentType(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Тип документа" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Документ</SelectLabel>
                  <SelectItem value="Указ">Указ</SelectItem>
                  <SelectItem value="Приказ">Приказ</SelectItem>
                  <SelectItem value="Справка">Справка</SelectItem>
                  <SelectItem value="Повестка">Повестка</SelectItem>
                  <SelectItem value="Договор">Договор</SelectItem>
                  <SelectItem value="Патент">Патент</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          {documents?.map((document) => (
            <div>{document.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
