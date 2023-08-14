"use client"
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyState {
    title?: string;
    subtitile?: string;
    showReset?: boolean
}

const EmptyState: React.FC<EmptyState> = ({
    title='No exact matches',
    subtitile='Try changing or removing some of your files',
    showReset
}) => {
    const router = useRouter()
  return (
  <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
   <Heading
   center
   title={title}
   subtitle={subtitile}
   />
   <div className="w-48 mt-4">
    {showReset && (
        <Button
        outline
        label="Remove all filters"
        onClick={()=> router.push('/')}
        />
    )
    }
   </div>
    </div>
    )
};

export default EmptyState;
