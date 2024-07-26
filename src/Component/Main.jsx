import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../components/ui/carousel"
  import {
    Card,
    CardContent,
    
  } from "../components/ui/card"
  import { Button } from "../components/ui/button"

  

function Main() {

    function FileIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        )
      }
      
      
      function GithubIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        )
      }
      
      
      function LinkedinIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        )
      }
      
      
      function XIcon(props) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )
      }

  return (
    <>
    <div className=' h-screen w-full flex flex-col bg-black justify-center items-center'>
      <h1 className=' bg-gradient-to-r from-purple-300 to-blue-200 to bg-yellow-100 inline-block text-transparent bg-clip-text text-5xl font-semibold'>Hello! This is Rida.</h1>
      <h2 className=' font-poppins text-white mt-4 text-xl w-3/4 font-light tracking-wide'>
      An aspiring AI Engineer and Software Development stundent. I do Web Development and I love to design clean UI layouts. My projects are build on core concepts of each language in learning explore them below.</h2>
    </div>
    <div className=' h-screen w-full flex flex-col bg-black justify-center items-center'>
        <h3 className=' bg-gradient-to-r from-purple-300 to-blue-200 to bg-yellow-100 inline-block text-transparent bg-clip-text text-5xl font-semibold'>Explore my projects.</h3>
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl   mt-24 text-poppins">
            <CarouselContent>
              <CarouselItem >
                <Card className="bg-black">
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 py-24">
                    <h3 className="text-2xl text-primary-foreground">A simple online store build on reactjs</h3>
                    <p className="text-lg font-thin text-white tracking-wide">A store will minimal ui layout and simple functionalities an online store build on reactjs and tailwind css. it uses basic concept of context api, react routers and some UI libraries</p>
                    <a href='https://github.com/Ridzz110/eShop'>
                    <Button
                      href="#"
                      className="text-black inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Button>
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-400">
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 py-24">
                    <h3 className="text-2xl text-primary-foreground">Gemini Clone</h3>
                    <p className="text-lg font-thin text-white tracking-wide">Google Gemini clone build on Reactjs, tailwind css and Google Gemini api.</p>
                    <a href='https://github.com/Ridzz110/GeminiClone'>
                    <Button
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-purple-400 shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Button>
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="bg-green-500">
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 py-24">
                    <h3 className="text-2xl text-primary-foreground">Simple Budget tracker</h3>
                    <p className="text-lg font-thin text-white tracking-wide">A custom e-commerce solution for a local boutique.</p>
                    <Button
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-green-600 shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className=" bg-gray-800">
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 py-24">
                    <h3 className="text-2xl text-primary-foreground">Inventory Management System</h3>
                    <p className="text-lg font-thin text-white tracking-wide">IMS built on java and mysql. it manages user roles and based on it fetches relevant data. it manages product, category and order. it has a bill generation system and its capable to tracks all the orders.</p>
                    <Button
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-medium text-gray-800 shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
    </div>
    <footer id="contact" className="bg-black py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; 2024 Ridzz. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Ridzz110" target="_blank" prefetch={false}>
              <GithubIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="www.linkedin.com/in/rida-batool-a42438297" target="_blank" prefetch={false}>
              <LinkedinIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </a>
            <a href="https://drive.google.com/file/d/1jcCp8zbEEEdnovyue8xS3uXDDNGzoFQq/view?usp=drive_link" target="_blank" prefetch={false}>
              <FileIcon className="h-6 w-6 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Main
