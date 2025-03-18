"use client";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import Button from "./Button"
import { useState } from 'react'
import ReactMarkdown from "react-markdown"; 
import { LoaderCircle } from "lucide-react";



const Explainer = ({ snippet_code }: { snippet_code: string }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [explanation, setExplanation] = useState("");
    const [loading, setLoading] = useState(false);

    const handleExplainer = async () => {
        setLoading(true)
        const data = await fetch('http://localhost:5000/api/explain', {
            method:"POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({"code":snippet_code})
        });

        const response = await data.json();
        setExplanation(response.explanation);
        setLoading(false)
        setIsOpen(true)
    }

  return (
    <div>
        <div onClick={()=> handleExplainer()}><Button name={loading? <LoaderCircle className="animate-spin" /> :("✨ Explain")} /></div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-3xl md:max-w-4xl lg:max-w-5xl">
            <DialogHeader>
              <DialogTitle>Code Explanation</DialogTitle>
              <DialogDescription className="overflow-auto max-h-[60vh]">
              <div><ReactMarkdown>{explanation || "Loading..."}</ReactMarkdown></div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default Explainer