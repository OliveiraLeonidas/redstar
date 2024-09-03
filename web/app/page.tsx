'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CommandIcon, Github } from "lucide-react";
import unreal from '../public/owen-russell-inspiration.jpg'
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex min-h-screen px-6 py-4 bg-slate-950">
      {/* left side */}
      <div className="flex-1 bg-black text-white p-8">
        <div className="flex items-center mb-8">
          <CommandIcon className="w-6 h-6 mr-2" />
          <span className="text-xl font-semibold">UnReal <span className="text-slate-100">Chat</span></span>
        </div>
        <div className="flex flex-col justify-center h-full">
          <Image className="rounded-md mb-2 opacity-50" alt="porra" src={unreal} style={{ aspectRatio: "1100/800", objectFit: "cover"}} />
          <blockquote className="text-lg">
            “This library has saved me countless hours of work and helped me deliver stunning designs to my clients
            faster than ever before. Highly recommended!”
          </blockquote>
          <cite className="mt-4 block text-sm">Sofia Davis</cite>
        </div>
      </div>


      {/* right side */}
      <div className="flex-1 bg-[#0d0d0d] text-white p-8 flex flex-col justify-between">
        <div className="flex items-start justify-end mb-8">
          <Button variant='outline' className="text-zinc-950 hover:bg-zinc-900 hover:text-zinc-50" >Login</Button>
        </div>
        <div className="max-w-full flex justify-center items-center flex-col text-center text-zinc-50 flex-1">
          <div className="max-w-md flex flex-col justify-center ">
            <h2 className="text-2xl font-semibold mb-2 ">Create an account</h2>
            <p className="text-muted-foreground mb-6">Enter with username and password</p>
            <Input type="text" placeholder="name" className="bg-transparent outline-none border-spacing-0.5 mb-4" />
            <Input type="email" placeholder="name@example.com" className="bg-transparent outline-none border-spacing-0.5 mb-4" />
            <Input type="password" placeholder="password" className="bg-transparent outline-none border-spacing-0.5 mb-4" />
            <Button variant='outline' className="w-full mb-4 text-zinc-950  hover:bg-zinc-900 hover:text-zinc-50">Sign up</Button>
            <div className="flex items-center mb-4">
              <hr className="flex-1 border-muted-foreground" />
              <span className="px-2 text-sm text-muted-foreground">OR CONTINUE WITH</span>
              <hr className="flex-1 border-muted-foreground" />
            </div>
            <Button variant="outline" className="w-full mb-4 text-zinc-950 hover:bg-zinc-900 hover:text-zinc-50">
              <Github  className="mr-2 " />
              Github
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
