'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ban, FileText, DollarSign, ParkingSquare, Clock, ChevronDown, Phone, Mail, Globe, MapPin, ClockIcon, Shield, TrendingUp, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const processSteps = [
    { 
      icon: Ban, 
      title: "No Existing Loan", 
      description: "Ensure your vehicle is free from any existing loans or financial obligations.",
      details: "Before applying, make sure your vehicle has no outstanding loans or financial ties. This clean slate is crucial for a smooth pledging process."
    },
    { 
      icon: FileText, 
      title: "Required Documents", 
      description: "Provide original RC, NOC (if applicable), and valid insurance copy.",
      details: "You'll need to submit the original Registration Certificate (RC), a No Objection Certificate (NOC) if the vehicle was previously under a loan, and a valid insurance document. These papers are essential for verifying ownership and the vehicle's legal status."
    },
    { 
      icon: DollarSign, 
      title: "Approval Amount", 
      description: "Get up to 60% of your vehicle's current resale value.",
      details: "Our expert evaluators will assess your vehicle's current market value. Based on this professional appraisal, we offer a loan amount of up to 60% of the determined resale value, ensuring you get the maximum benefit from your pledge."
    },
    { 
      icon: ParkingSquare, 
      title: "Secure Vehicle Storage", 
      description: "Your vehicle is stored in our CCTV-monitored, shaded parking.",
      details: "Once the loan is approved, your vehicle will be securely stored in our facility. Our parking area is shaded to protect your vehicle from the elements and monitored by CCTV cameras 24/7, ensuring its safety throughout the loan period."
    },
    { 
      icon: Clock, 
      title: "Swift Loan Disbursal", 
      description: "Receive funds within 1 hour of document verification.",
      details: "We understand the importance of quick access to funds. That's why we've streamlined our process to disburse the approved loan amount within just one hour after all your documents have been verified."
    }
  ]

  const contactInfo = [
    { icon: Phone, title: "Phone", info: "+91-9741207790 / 7353180180", href: "tel:+919741207790" },
    { icon: Mail, title: "Email", info: "shreelakshmipawnbroker@gmail.com", href: "mailto:shreelakshmipawnbroker@gmail.com" },
    { icon: Globe, title: "Website", info: "shreelakshmipawnbrokers.com", href: "https://shreelakshmipawnbrokers.com" },
    { icon: MapPin, title: "Address", info: "1372/C, 32nd E Cross Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041", href: "https://maps.google.com/?q=Shree+Lakshmi+Pawn+Brokers+Bengaluru" },
    { icon: ClockIcon, title: "Hours", info: "Monday - Saturday, 09:00 AM - 06:00 PM", href: "#" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <header className="text-center mb-16 relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image 
              src="/placeholder.svg?height=300&width=1200"
              alt="Decorative background"
              width={1200}
              height={300}
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <Image 
              src="https://shreelakshmipawnbrokers.com/shree-lakshmi-pawn-brokers-favicon.png"
              alt="Shree Lakshmi Pawn Brokers Logo" 
              width={120} 
              height={120}
              className="mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-4 text-red-600">Shree Lakshmi Pawn Brokers</h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Your Trusted Partner for Quick and Secure Vehicle Pledges
            </p>
          </div>
        </header>

        <Tabs defaultValue="process" className="mb-16">
          <TabsList className="w-full max-w-md mx-auto bg-gray-800 mb-8">
            <TabsTrigger value="process" className="w-1/2 data-[state=active]:bg-red-600 data-[state=active]:text-white">Pledge Process</TabsTrigger>
            <TabsTrigger value="contact" className="w-1/2 data-[state=active]:bg-red-600 data-[state=active]:text-white">Contact Us</TabsTrigger>
          </TabsList>
          <TabsContent value="process">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-50 border-red-500 border hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-red-500/20 p-3 rounded-full">
                        <step.icon className="h-6 w-6 text-red-500" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl text-red-600">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-gray-800 mb-4">{step.description}</p>
                        <div className="relative overflow-hidden transition-all duration-300" style={{ maxHeight: expandedStep === index ? '1000px' : '0' }}>
                          <p className="text-sm text-gray-600 mb-4">{step.details}</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-between text-red-500 hover:text-red-400 hover:bg-gray-700 mt-4"
                        onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                      >
                        {expandedStep === index ? 'Show Less' : 'Learn More'}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${expandedStep === index ? 'rotate-180' : ''}`} />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-50 border-red-500 border hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 h-full">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="bg-red-500/20 p-3 rounded-full shrink-0">
                        <item.icon className="h-6 w-6 text-red-500" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-500 mb-1">{item.title}</h3>
                        <a href={item.href} className="text-gray-700 hover:text-red-400 transition-colors text-sm break-words" target="_blank" rel="noopener noreferrer">
                          {item.info}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-16 text-center relative">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image 
              src="/placeholder.svg?height=400&width=1200"
              alt="Decorative background"
              width={1200}
              height={400}
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-semibold mb-6 text-red-600">Why Choose Shree Lakshmi Pawn Brokers?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Shield, title: "Trust", description: "Over 20 years of industry experience" },
                { icon: Zap, title: "Speed", description: "Quick loan approval and disbursement" },
                { icon: TrendingUp, title: "Value", description: "Competitive rates and flexible terms" },
                { icon: Clock, title: "Support", description: "Dedicated customer service" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                >
                  <item.icon className="h-12 w-12 text-red-600 mb-4 mx-auto" aria-label={`${item.title} icon`} />
                  <h3 className="text-xl font-semibold mb-2 text-red-600">{item.title}</h3>
                  <p className="text-gray-800">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 pt-16 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-red-600">Our Commitment to You</h2>
              <p className="text-gray-800 mb-4">
                At Shree Lakshmi Pawn Brokers, we're committed to providing you with a seamless and transparent vehicle pledge experience. Our team of experts is dedicated to offering you the best value for your vehicle, ensuring you get the financial support you need when you need it most.
              </p>
              <p className="text-gray-800">
                With our state-of-the-art security measures and customer-first approach, you can trust us to keep your vehicle safe and your information confidential. Experience the difference of working with a trusted industry leader.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="/placeholder.svg?height=300&width=400"
                alt="Secure Vehicle Storage" 
                width={400} 
                height={300}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/4 opacity-10">
              <Image 
                src="/placeholder.svg?height=200&width=200"
                alt="Decorative graphic"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}