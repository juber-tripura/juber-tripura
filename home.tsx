'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, CreditCard, Car, Bike, BikeIcon as Scooter, ChevronRight, ArrowRight, Check, Menu, Clock, Shield, DollarSign, Phone, Mail, MapPin, Ban, FileText, Percent, ParkingSquare, ThumbsUp, Zap, ArrowUp, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { IndianRupeeIcon as Rupee, CarIcon, BikeIcon } from 'lucide-react'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [vehicleValue, setVehicleValue] = useState('')
  const [loanAmount, setLoanAmount] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    { image: "/placeholder.svg?height=400&width=600", alt: "Vehicle 1" },
    { image: "/placeholder.svg?height=400&width=600", alt: "Vehicle 2" },
    { image: "/placeholder.svg?height=400&width=600", alt: "Vehicle 3" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const calculateLoan = () => {
    const value = parseFloat(vehicleValue)
    if (!isNaN(value)) {
      setLoanAmount(value * 0.6)
    } else {
      setLoanAmount(0)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/919902555786?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image 
                src="https://shreelakshmipawnbrokers.com/shree-lakshmi-pawn-brokers-favicon.png"
                alt="Shree Lakshmi Pawn Brokers Logo" 
                width={140} 
                height={40}
                className="h-10 w-auto"
              />
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-red-800 transition-colors">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-gray-800 text-white rounded-lg">
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Car className="h-5 w-5 text-red-500" />
                          <span>Car Loan</span>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Bike className="h-5 w-5 text-red-500" />
                          <span>Bike Loan</span>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Scooter className="h-5 w-5 text-red-500" />
                          <span>Scooter Loan</span>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors" onClick={() => scrollToSection('about-us')}>About Us</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors" onClick={() => scrollToSection('contact-us')}>Contact Us</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors" onClick={() => scrollToSection('vehicle-pledge-calculator')}>Vehicle Pledge Calculator</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors hidden md:inline-flex">
                Apply Now
              </Button>
              <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-50 bg-gray-900 p-4 md:hidden border-b border-gray-800"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-lg font-medium hover:text-red-500 transition-colors">Products</a>
              <a href="#about-us" className="text-lg font-medium hover:text-red-500 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a>
              <a href="#contact-us" className="text-lg font-medium hover:text-red-500 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); }}>Contact Us</a>
              <a href="#vehicle-pledge-calculator" className="text-lg font-medium hover:text-red-500 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('vehicle-pledge-calculator'); }}>Vehicle Pledge Calculator</a>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors">
                Apply Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-black py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500 opacity-20 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-red-700 opacity-20 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-[1200px] px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-10">
              <div className="relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight relative">Find Your Perfect Vehicle Loan</h1>
                <p className="text-lg md:text-xl text-gray-300 relative">Quick, easy, and hassle-free financing options for your dream vehicle.</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-orange-100 to-orange-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Rupee className="h-8 w-8 text-orange-600 mb-2" />
                    <h3 className="font-semibold text-sm">Competitive Rates</h3>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Percent className="h-8 w-8 text-gray-600 mb-2" />
                    <h3 className="font-semibold text-sm">Flexible Terms</h3>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-100 to-green-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Clock className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-sm">Quick Approval</h3>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="car" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="car" className="text-[#3F3F46] data-[state=active]:bg-[#DC2626] data-[state=active]:text-white">Car Loan</TabsTrigger>
                  <TabsTrigger value="bike" className="text-[#3F3F46] data-[state=active]:bg-[#DC2626] data-[state=active]:text-white">Bike Loan</TabsTrigger>
                  <TabsTrigger value="scooter" className="text-[#3F3F46] data-[state=active]:bg-[#DC2626] data-[state=active]:text-white">Scooter Loan</TabsTrigger>
                </TabsList>
                <TabsContent value="car">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-red-100 text-[#DC2626]">
                            <CarIcon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Car Loan</h3>
                            <p className="text-sm text-gray-500">Finance your dream car today</p>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-[#DC2626]" />
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Competitive interest rates</li>
                        <li>• Flexible repayment terms</li>
                        <li>• Quick approval process</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="bike">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-green-100 text-green-600">
                            <BikeIcon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Bike Loan</h3>
                            <p className="text-sm text-gray-500">Get your two-wheeler financed easily</p>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-green-600" />
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Low down payment options</li>
                        <li>• Customized EMI plans</li>
                        <li>• Minimal documentation required</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="scooter">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                            <BikeIcon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Scooter Loan</h3>
                            <p className="text-sm text-gray-500">Easy financing for your scooter</p>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-purple-600" />
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Affordable EMI options</li>
                        <li>• Quick loan disbursement</li>
                        <li>• Flexible tenure options</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <Carousel className="w-full max-w-md mx-auto"
                        onSelect={(index) => setActiveSlide(index)}>
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-0 shadow-xl overflow-hidden">
                        <CardContent className="p-0">
                          <img src={slide.image} alt={slide.alt}
                               className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-105" />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute -bottom-10 left-0 right-0 flex justify-center mt-4">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                        index === activeSlide ? 'bg-[#DC2626] w-4' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Pledge Process Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Vehicle Pledge Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Ban, title: "No Existing Loan", description: "Your vehicle should not have any outstanding loans." },
              { icon: FileText, title: "Required Documents", description: "Provide the original RC, NOC (if the vehicle was purchased with a loan), and insurance." },
              { icon: DollarSign, title: "Approval Amount", description: "We offer up to 60% of your vehicle's resale value." },
              { icon: ParkingSquare, title: "Vehicle Storage", description: "Your vehicle will be securely parked in our shaded parking area until the loan is repaid." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors">
              Secure Your Fast Loan Today
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-red-800 opacity-10 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-red-600 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
          <p className="text-xl text-center text-gray-300 mb-12">Unlock the Value of Your Two-Wheeler</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Quick Approval", description: "Get your loan approved in as little as 30 minutes." },
              { icon: ThumbsUp, title: "Competitive Rates", description: "We offer some of the best interest rates in the market." },
              { icon: Clock, title: "Flexible Repayment", description: "Choose a repayment plan that suits your financial situation." },
              { icon: Shield, title: "No Hidden Charges", description: "We believe in complete transparency. No surprises, ever." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Additional Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ParkingSquare, title: "Secure Parking", description: "We offer secure parking facilities for your vehicle during the loan period, ensuring its safety." },
              { icon: Shield, title: "No Credit Checks", description: "Our loan approvals are based on your vehicle's value, not your credit score. No credit checks required." },
              { icon: Zap, title: "Instant Loan", description: "Get immediate cash disbursal within hours of submitting your documents and vehicle evaluation." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-red-800 opacity-10 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-red-600 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
          <p className="text-xl text-center text-gray-300 mb-12">Simple 3-Step Process</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "1", title: "Apply Online", description: "Fill out our simple online application form." },
              { number: "2", title: "Vehicle Inspection", description: "We'll quickly assess your two-wheeler." },
              { number: "3", title: "Get Your Cash", description: "Receive your loan amount instantly." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg relative"
              >
                <div className="absolute -top-4 -left-4 bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-6">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Pledge Calculator Section */}
      <section id="vehicle-pledge-calculator" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Vehicle Pledge Calculator</h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">Estimate Your Loan Amount</CardTitle>
              <CardDescription className="text-gray-400">Enter your vehicle's current resale value to get an estimate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <Input
                      id="vehicle-value"
                      type="number"
                      placeholder="Vehicle Value (INR)"
                      value={vehicleValue}
                      onChange={(e) => setVehicleValue(e.target.value)}
                      className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-red-500 focus:ring-red-500"
                    />
                    <Button onClick={calculateLoan} className="bg-red-600 hover:bg-red-700 text-white transition-colors">
                      Calculate
                    </Button>
                  </div>
                  {loanAmount > 0 && (
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-lg text-white">Estimated Loan Amount:</p>
                      <p className="text-3xl font-bold text-red-500">₹{loanAmount.toFixed(2)}</p>
                    </div>
                  )}
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">Loan Calculation Process:</h4>
                  <olI apologize for the incomplete code. You're right, and I'll provide the full, complete code for the entire component. Let me review and complete it for you.



Here's the complete, full code for the component:

```tsx project="Shree Lakshmi Pawn Brokers" file="nav-hero.tsx" type="react"
'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calculator, CreditCard, Car, Bike, BikeIcon as Scooter, ChevronRight, ArrowRight, Check, Menu, Clock, Shield, DollarSign, Phone, Mail, MapPin, Ban, FileText, Percent, ParkingSquare, ThumbsUp, Zap, ArrowUp, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { IndianRupeeIcon as Rupee, CarIcon, BikeIcon } from 'lucide-react'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [vehicleValue, setVehicleValue] = useState('')
  const [loanAmount, setLoanAmount] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const slides = [
    { image: "/placeholder.svg?height=400&width=600", alt: "Vehicle 1" },
    { image: "/placeholder.svg?height=400&width=600", alt: "Vehicle 2" },
    { image: "/placeholder.svg?height=400&width=600", alt: "Vehicle 3" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const calculateLoan = () => {
    const value = parseFloat(vehicleValue)
    if (!isNaN(value)) {
      setLoanAmount(value * 0.6)
    } else {
      setLoanAmount(0)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/919902555786?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center space-x-8">
              <Image 
                src="https://shreelakshmipawnbrokers.com/shree-lakshmi-pawn-brokers-favicon.png"
                alt="Shree Lakshmi Pawn Brokers Logo" 
                width={140} 
                height={40}
                className="h-10 w-auto"
              />
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-red-800 transition-colors">Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-gray-800 text-white rounded-lg">
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Car className="h-5 w-5 text-red-500" />
                          <span>Car Loan</span>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Bike className="h-5 w-5 text-red-500" />
                          <span>Bike Loan</span>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Scooter className="h-5 w-5 text-red-500" />
                          <span>Scooter Loan</span>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors" onClick={() => scrollToSection('about-us')}>About Us</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors" onClick={() => scrollToSection('contact-us')}>Contact Us</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors" onClick={() => scrollToSection('vehicle-pledge-calculator')}>Vehicle Pledge Calculator</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors hidden md:inline-flex">
                Apply Now
              </Button>
              <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-50 bg-gray-900 p-4 md:hidden border-b border-gray-800"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-lg font-medium hover:text-red-500 transition-colors">Products</a>
              <a href="#about-us" className="text-lg font-medium hover:text-red-500 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('about-us'); }}>About Us</a>
              <a href="#contact-us" className="text-lg font-medium hover:text-red-500 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('contact-us'); }}>Contact Us</a>
              <a href="#vehicle-pledge-calculator" className="text-lg font-medium hover:text-red-500 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('vehicle-pledge-calculator'); }}>Vehicle Pledge Calculator</a>
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors">
                Apply Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-black py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-500 opacity-20 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-red-700 opacity-20 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-[1200px] px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-10">
              <div className="relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight relative">Find Your Perfect Vehicle Loan</h1>
                <p className="text-lg md:text-xl text-gray-300 relative">Quick, easy, and hassle-free financing options for your dream vehicle.</p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-orange-100 to-orange-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Rupee className="h-8 w-8 text-orange-600 mb-2" />
                    <h3 className="font-semibold text-sm">Competitive Rates</h3>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-white to-gray-100 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Percent className="h-8 w-8 text-gray-600 mb-2" />
                    <h3 className="font-semibold text-sm">Flexible Terms</h3>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-100 to-green-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                    <Clock className="h-8 w-8 text-green-600 mb-2" />
                    <h3 className="font-semibold text-sm">Quick Approval</h3>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="car" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="car" className="text-[#3F3F46] data-[state=active]:bg-[#DC2626] data-[state=active]:text-white">Car Loan</TabsTrigger>
                  <TabsTrigger value="bike" className="text-[#3F3F46] data-[state=active]:bg-[#DC2626] data-[state=active]:text-white">Bike Loan</TabsTrigger>
                  <TabsTrigger value="scooter" className="text-[#3F3F46] data-[state=active]:bg-[#DC2626] data-[state=active]:text-white">Scooter Loan</TabsTrigger>
                </TabsList>
                <TabsContent value="car">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-red-100 text-[#DC2626]">
                            <CarIcon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Car Loan</h3>
                            <p className="text-sm text-gray-500">Finance your dream car today</p>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-[#DC2626]" />
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Competitive interest rates</li>
                        <li>• Flexible repayment terms</li>
                        <li>• Quick approval process</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="bike">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-green-100 text-green-600">
                            <BikeIcon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Bike Loan</h3>
                            <p className="text-sm text-gray-500">Get your two-wheeler financed easily</p>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-green-600" />
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Low down payment options</li>
                        <li>• Customized EMI plans</li>
                        <li>• Minimal documentation required</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="scooter">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                            <BikeIcon className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Scooter Loan</h3>
                            <p className="text-sm text-gray-500">Easy financing for your scooter</p>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-purple-600" />
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Affordable EMI options</li>
                        <li>• Quick loan disbursement</li>
                        <li>• Flexible tenure options</li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div className="hidden md:block relative">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <Carousel className="w-full max-w-md mx-auto"
                        onSelect={(index) => setActiveSlide(index)}>
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-0 shadow-xl overflow-hidden">
                        <CardContent className="p-0">
                          <img src={slide.image} alt={slide.alt}
                               className="w-full h-auto rounded-lg transition-transform duration-300 transform group-hover:scale-105" />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute -bottom-10 left-0 right-0 flex justify-center mt-4">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full mx-1 transition-all duration-300 ${
                        index === activeSlide ? 'bg-[#DC2626] w-4' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <CarouselPrevious className="-left-12" />
                <CarouselNext className="-right-12" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Pledge Process Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Vehicle Pledge Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Ban, title: "No Existing Loan", description: "Your vehicle should not have any outstanding loans." },
              { icon: FileText, title: "Required Documents", description: "Provide the original RC, NOC (if the vehicle was purchased with a loan), and insurance." },
              { icon: DollarSign, title: "Approval Amount", description: "We offer up to 60% of your vehicle's resale value." },
              { icon: ParkingSquare, title: "Vehicle Storage", description: "Your vehicle will be securely parked in our shaded parking area until the loan is repaid." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white transition-colors">
              Secure Your Fast Loan Today
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-red-800 opacity-10 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-red-600 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
          <p className="text-xl text-center text-gray-300 mb-12">Unlock the Value of Your Two-Wheeler</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Quick Approval", description: "Get your loan approved in as little as 30 minutes." },
              { icon: ThumbsUp, title: "Competitive Rates", description: "We offer some of the best interest rates in the market." },
              { icon: Clock, title: "Flexible Repayment", description: "Choose a repayment plan that suits your financial situation." },
              { icon: Shield, title: "No Hidden Charges", description: "We believe in complete transparency. No surprises, ever." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Additional Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ParkingSquare, title: "Secure Parking", description: "We offer secure parking facilities for your vehicle during the loan period, ensuring its safety." },
              { icon: Shield, title: "No Credit Checks", description: "Our loan approvals are based on your vehicle's value, not your credit score. No credit checks required." },
              { icon: Zap, title: "Instant Loan", description: "Get immediate cash disbursal within hours of submitting your documents and vehicle evaluation." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 p-3 rounded-full mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-red-800 opacity-10 blur-3xl"></div>
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-red-600 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
          <p className="text-xl text-center text-gray-300 mb-12">Simple 3-Step Process</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "1", title: "Apply Online", description: "Fill out our simple online application form." },
              { number: "2", title: "Vehicle Inspection", description: "We'll quickly assess your two-wheeler." },
              { number: "3", title: "Get Your Cash", description: "Receive your loan amount instantly." },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg relative"
              >
                <div className="absolute -top-4 -left-4 bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 mt-6">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Pledge Calculator Section */}
      <section id="vehicle-pledge-calculator" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Vehicle Pledge Calculator</h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">Estimate Your Loan Amount</CardTitle>
              <CardDescription className="text-gray-400">Enter your vehicle's current resale value to get an estimate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <Input
                      id="vehicle-value"
                      type="number"
                      placeholder="Vehicle Value (INR)"
                      value={vehicleValue}
                      onChange={(e) => setVehicleValue(e.target.value)}
                      className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-red-500 focus:ring-red-500"
                    />
                    <Button onClick={calculateLoan} className="bg-red-600 hover:bg-red-700 text-white transition-colors">
                      Calculate
                    </Button>
                  </div>
                  {loanAmount > 0 && (
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <p className="text-lg text-white">Estimated Loan Amount:</p>
                      <p className="text-3xl font-bold text-red-500">₹{loanAmount.toFixed(2)}</p>
                    </div>
                  )}
                </div>
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-4">Loan Calculation Process:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300">
                    <li>Enter your vehicle's current resale value.</li>
                    <li>Our calculator estimates your loan amount at 60% of the resale value.</li>
                    <li>This is an estimate; final loan amount may vary based on vehicle inspection and other factors.</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="text-gray-300">
                Shree Lakshmi Pawn Brokers is a trusted and reputable pawn business in Bangalore, specializing in bike and two-wheeler pledge services. With a commitment to providing fast, secure, and hassle-free loans, we offer flexible solutions for customers seeking immediate financial assistance by pledging their two-wheelers.
              </p>
              <h3 className="text-2xl font-semibold text-white">Our Values</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Customer-centric approach</li>
                <li>Transparency in all transactions</li>
                <li>Innovation in financial solutions</li>
                <li>Commitment to excellence</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Shree Lakshmi Pawn Brokers Team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-red-500 opacity-10 blur-3xl"></div>
          <div className="absolute right-1/4 top-1/4 h-[200px] w-[200px] rounded-full bg-red-700 opacity-10 blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
              <p className="text-gray-300">
                Have questions or need assistance? Our team is here to help. Reach out to us through any of the following channels:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">+91-9741207790</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">shreelakshmipawnbroker@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">1372/C, 32nd E Cross Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">Monday - Saturday, 09:00 AM - 06:00 PM</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input name="name" placeholder="Your Name" aria-label="Your Name" className="bg-gray-800 text-white border-gray-700 focus:border-red-500 focus:ring-red-500" required />
                <Input name="phone" placeholder="Your Phone" type="tel" aria-label="Your Phone" className="bg-gray-800 text-white border-gray-700 focus:border-red-500 focus:ring-red-500" required />
                <Input name="email" placeholder="Your Email" type="email" aria-label="Your Email" className="bg-gray-800 text-white border-gray-700 focus:border-red-500 focus:ring-red-500" required />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  aria-label="Your Message"
                  className="w-full bg-gray-800 text-white border-gray-700 rounded-md focus:border-red-500 focus:ring-red-500 p-2"
                  required
                ></textarea>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white transition-colors">Send to WhatsApp</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Shree Lakshmi Pawn Brokers</h3>
              <p className="text-sm text-gray-400">Shree Lakshmi Pawn Brokers offers hassle-free vehicle financing solutions for bikes and two-wheelers with competitive rates and quick approvals in Bangalore.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about-us" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#vehicle-pledge-calculator" className="text-sm text-gray-400 hover:text-white transition-colors">Vehicle Pledge Calculator</Link></li>
                <li><Link href="#contact-us" className="text-sm text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Bike Loan</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Scooter Loan</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Two-Wheeler Pledge</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-400">
                  <Phone className="h-4 w-4 mr-2" /> +91-9741207790
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <Mail className="h-4 w-4 mr-2" /> shreelakshmipawnbroker@gmail.com
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" /> 1372/C, 32nd E Cross Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041
                </li>
                <li className="flex items-center text-sm text-gray-400">
                  <Clock className="h-4 w-4 mr-2" /> Mon - Sat, 09:00 AM - 06:00 PM
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Shree Lakshmi Pawn Brokers. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-20 right-4 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50"
        aria-label="Back to Top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      {/* Sticky WhatsApp Icon */}
      <a
        href={`https://wa.me/919902555786`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}