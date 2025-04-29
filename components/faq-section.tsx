"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

const faqData = [
    // {
    //   question: "What services does Codizio offer?",
    //   answer: "Codizio offers a comprehensive range of IT services including web development, mobile app development, UI/UX design, cloud solutions, digital marketing, and cybersecurity services. We specialize in creating custom solutions tailored to your business needs."
    // },
    // {
    //   question: "How long does it typically take to complete a project?",
    //   answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
    // },
    // {
    //   question: "Do you provide ongoing support after project completion?",
    //   answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your solution continues to operate optimally."
    // },
    // {
    //   question: "What is your development process?",
    //   answer: "Our development process follows an agile methodology with five key phases: Discovery & Planning, Design, Development, Testing & QA, and Deployment. We maintain transparent communication and regular updates throughout the project lifecycle."
    // },
    // {
    //   question: "How do you handle project pricing?",
    //   answer: "We offer flexible pricing models including fixed-price and time-and-materials based on project requirements. Each project is quoted individually after a thorough analysis of your needs, scope, and complexity."
    // },
    // {
    //   question: "Can you help with existing projects or only new ones?",
    //   answer: "We work with both new projects and existing solutions. Our team can take over maintenance, implement new features, or completely redesign existing applications to meet your current needs."
    // },
    // {
    //   question: "What technologies do you specialize in?",
    //   answer: "We specialize in modern web and mobile technologies including React, Next.js, Node.js, React Native, Flutter, AWS, and Azure. We stay current with industry trends to provide the most effective solutions."
    // },
    // {
    //   question: "How do you ensure project security?",
    //   answer: "Security is paramount in our development process. We implement industry best practices, regular security audits, encrypted data transmission, secure authentication systems, and follow OWASP guidelines to protect your application."
    // }, // yeh add hai
    {
      question: "Do you sign an NDA ?",
      answer: "Yes we do. You can completely rely on our developers to keep your idea safe and private. We will, on completion of the project, hand over the app and the source code to you."
    },
    {
      question: "How do you guarantee the product quality?",
      answer: "We work with full precision and regularly test the work results by considering the client needs as well. This allows us to cater to our clients preferences under the specified deadlines. We believe in quality above all."
    },
    {
      question: "What is the basic information required from the clients to start the work?",
      answer: "We collect the details of your project – like scope, estimated time frames, budget in mind and business challenges you’d like to solve."
    },
    {
      question: "How long will it take to start my project ?",
      answer: "Initially, we review project requirements from the client, after analyzing we inform you of the estimated results. On getting your approval for the time and cost , the next step would be to create a project report document and a proposal.Once everything has been finalized we would then take the project to the next stage, which is the development stage."
    },
    {
      question: "What tools you use for project management?",
      answer: "Mainly we use base camp , jira and a few others but we are are also open to any other tool that client suggest."
    },
    {
      question: "What are the cost ranges that you offer?",
      answer: "Again, the cost of the project also depends on its complexity and your preferences. Other contributing factors are the types of graphics used, sound effects, the platform chosen and all other extra features and the complexity behind it. To know about the estimated price of your project, kindly send us your requirements and we will get back to you shortly."
    },
    {
      question: "Do you provide maintenance of the product once done?",
      answer: "Yes we do. We provide a free support and maintenance to our clients after the delivering the project for a certain time frame. Post that, we offer various maintenance plans for our clients."
    },
    {
      question: "What are the stages involved in the development process?",
      answer: "There are three stages in our development process: The first stage is of planning in which we, after understanding your business and your objectives behind developing the solution, will wireframe a solution. The second stage is the design and development stage wherein we will create designs and and a prototype and work on the development of your product which we will test and remove the bugs and errors if any. And thirdly we do the we do the deployment."
    },
    {
      question: "How will I know the status of my projects?",
      answer: "Each of our development projects is allocated to one of our experienced project manager. He always keeps communicating with the clients during the working hours via Skype, email and phone and acts as a single point of contact informing our clients about the progress of their projects."
    },
    {
      question: "I do not have a complete idea. Can you help?",
      answer: "Yes, our highly expert tech developers will assist you in converting your aims and needs into reality and they will also help you in improving upon them."
    },
    {
      question: "How do I begin my project with you?",
      answer: "It’s pretty simple, just contact us or just ping us at : info@Codizio.com"
    },
  ];
  
export default function FAQSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="bg-gray-950">
   <div className="container px-4 md:px-6 mx-auto">
     <div className="w-full max-w-3xl  mx-auto  px-4 py-16 ">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-2 bg-purple-900/20 rounded-full mb-4">
          <HelpCircle className="h-6 w-6 text-purple-400" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about our services, process, and support options.
        </p>
      </div>

      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-purple-900/20 blur-xl rounded-lg opacity-50" />

        <div className="relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-purple-900/50 shadow-xl overflow-hidden ">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border-b border-purple-900/30 last:border-0 transition-all duration-300 ${
                  hoveredIndex === index ? "bg-purple-900/10" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AccordionTrigger
                  className={`py-6 px-4 hover:no-underline group transition-all duration-300 ${
                    hoveredIndex === index ? "text-purple-200" : "text-white"
                  }`}
                >
                  <span className="text-left">{faq.question}</span>
                  <div
                    className={`h-1 w-5 bg-gradient-to-r from-purple-600 to-purple-900 rounded-full ml-2 transition-all duration-500 ${
                      hoveredIndex === index ? "w-8 from-purple-500 to-purple-700" : ""
                    }`}
                  />
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 pt-2 text-gray-300">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600/40 to-transparent rounded-full" />
                    <p className="pl-4">{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
   </div></div>
  )
}
