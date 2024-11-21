'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Bike, DollarSign, Clock, Shield, FileText, Percent, CheckCircle2, Menu, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Ban, FileCheck, PiggyBank, Car, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TwoWheelerPledgeServices() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const phone = formData.get('phone')
    const email = formData.get('email')
    const message = formData.get('message')

    const whatsappMessage = `New Loan Application:
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`

    const whatsappUrl = `https://wa.me/919902555786?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    closePopup()
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-gray-100 bg-opacity-90 backdrop-blur-md border-b border-red-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Image 
                src="https://shreelakshmipawnbrokers.com/shree-lakshmi-pawn-brokers-favicon.png"
                alt="Shree Lakshmi Pawn Brokers Logo" 
                width={140} 
                height={40}
                className="h-8 w-auto"
              />
              <NavigationMenu className="hidden md:flex ml-6">
                <NavigationMenuList className="space-x-4">
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors">Home</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base font-medium bg-transparent hover:bg-red-800 transition-colors">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 bg-gray-950 text-white rounded-lg">
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Bike className="h-5 w-5 text-red-500" />
                          <span>Two-Wheeler Pledge Loan</span>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Bike className="h-5 w-5 text-red-500" />
                          <span>Scooter Pledge Loan</span>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="flex items-center space-x-2 rounded-md p-3 hover:bg-red-800 transition-colors">
                          <Car className="h-5 w-5 text-red-500" />
                          <span>Car Pledge Loan</span>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors">About Us</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="text-base font-medium hover:text-red-500 transition-colors">Contact</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white transition-colors hidden md:inline-flex" onClick={openPopup}>
                Apply Now
              </Button>
              <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-red-800">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-red-800">Two-Wheeler Pledge Loan</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-red-800">Scooter Pledge Loan</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-red-800">Car Pledge Loan</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-red-800">About Us</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-white hover:bg-red-800">Contact</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-300">
              <div className="px-2">
                <Button size="sm" className="w-full bg-red-500 hover:bg-red-600 text-white transition-colors" onClick={openPopup}>
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Image */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-600">Two-Wheeler Pledge Loan Services in Bangalore</h1>
              <p className="text-xl text-gray-700 mb-8">Fast, secure, and hassle-free financing for your bikes and scooters. Get the financial support you need without compromising on your vehicle ownership.</p>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white transition-colors" onClick={openPopup}>
                Apply Now
              </Button>
            </div>
            <div className="order-first md:order-last">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Two-Wheeler Pledge Loan"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Understanding Two-Wheeler Pledge Loans</h2>
          <p className="text-gray-700 mb-4">
            A two-wheeler pledge loan, also known as a bike loan or motorcycle loan, is a secured loan where you use your two-wheeler as collateral. This type of loan offers a quick and convenient way to access funds without selling your vehicle. At Shree Lakshmi Pawn Brokers, we specialize in providing hassle-free two-wheeler pledge loans in Bangalore, catering to the diverse financial needs of bike and scooter owners.
          </p>
          <p className="text-gray-700 mb-4">
            Our two-wheeler pledge loan service is designed to offer you financial flexibility while ensuring the safety and security of your vehicle. Whether you need funds for a personal emergency, business expansion, or any other purpose, our loan process is streamlined to provide you with quick access to cash without the lengthy approval processes associated with traditional loans.
          </p>
          <Card className="bg-white border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center text-red-600">
                <Bike className="mr-2 h-6 w-6" />
                Two-Wheeler Pledge Loan Features
              </CardTitle>
              <CardDescription className="text-gray-700">Discover the benefits of our two-wheeler pledge loans</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Loan up to 60% of your two-wheeler's value
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Competitive interest rates starting from 5% per month
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Flexible repayment terms up to 12 months
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  No hidden charges or prepayment penalties
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Secure storage of your vehicle during the loan period
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">The Advantages of Choosing Shree Lakshmi Pawn Brokers</h2>
          <p className="text-gray-700 mb-4">
            When it comes to two-wheeler pledge loans in Bangalore, Shree Lakshmi Pawn Brokers stands out as a trusted and reliable partner. Our years of experience in the industry have allowed us to refine our services to meet the unique needs of our clients. Here's why choosing us for your two-wheeler pledge loan makes sense:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Shield className="mr-2 h-6 w-6" />
                  No Credit Checks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">We don't perform credit checks. Our loans are based solely on your two-wheeler's value, making it easier for you to get financial assistance regardless of your credit history.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Clock className="mr-2 h-6 w-6" />
                  Quick Disbursal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">Get your loan amount disbursed within hours of approval. We understand that time is crucial when you need financial support, and our process is designed for speed and efficiency.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <FileText className="mr-2 h-6 w-6" />
                  Minimal Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">We've streamlined our process to require only essential documents, making the application process quick and hassle-free. Less paperwork means faster approval and disbursal.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-red-800">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <Percent className="mr-2 h-6 w-6" />
                  Competitive Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">Enjoy some of the most competitive interest rates in the market, ensuring that you get the best value for your two-wheeler pledge. Our transparent pricing means no surprises.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Our Two-Wheeler Pledge Loan Process</h2>
          <p className="text-gray-700 mb-4">
            At Shree Lakshmi Pawn Brokers, we've simplified the loan process to ensure you can access funds quickly and easily. Our streamlined approach is designed with your convenience in mind, making it possible to get the financial support you need without unnecessary delays or complications.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Apply", description: "Fill out our simple online or in-person application with basic details about you and your two-wheeler." },
              { icon: Bike, title: "Evaluate", description: "Our experts assess your two-wheeler's current market value to determine the maximum loan amount." },
              { icon: DollarSign, title: "Approve", description: "Get instant approval and a competitive loan offer based on your vehicle's value." },
              { icon: Clock, title: "Disburse", description: "Once approved, receive your loan amount within hours, giving you quick access to funds." }
            ].map((step, index) => (
              <Card key={index} className="bg-white border-red-800">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-red-900 mb-4">
                      <step.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="font-semibold mb-2 text-red-600">{step.title}</h3>
                    <p className="text-sm text-gray-700">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Eligibility and Documentation</h2>
          <p className="text-gray-700 mb-4">
            We've kept our eligibility criteria simple and our documentation requirements minimal to make the loan process as smooth as possible. Here's what you need to know:
          </p>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Eligibility Criteria</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>You must be the legal owner of the two-wheeler</li>
            <li>The two-wheeler should be in good condition and roadworthy</li>
            <li>The vehicle should be free from any existing loans or legal disputes</li>
            <li>You must be at least 18 years old and a resident of Bangalore</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 text-red-600">Required Documents</h3>
          <Card className="bg-white border-red-800">
            <CardContent className="pt-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Original RC (Registration Certificate) of the two-wheeler
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Valid insurance policy document
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Two passport size photographs
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  ID proof (Aadhar Card, PAN Card, or Voter ID)
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  Address proof (if different from ID proof)
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                  NOC (No Objection Certificate) from the financier (if the vehicle was purchased on loan)
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Frequently Asked Questions</h2>
          <p className="text-gray-700 mb-4">
            We understand that you may have questions about our two-wheeler pledge loan services. Here are answers to some of the most common queries we receive:
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-red-800">
              <AccordionTrigger className="text-red-600">How much loan can I get against my two-wheeler?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                You can get a loan of up to 60% of your two-wheeler's current market value. The exact amount depends on factors such as the vehicle's age, condition, and market demand. Our expert evaluators will assess your vehicle to determine the maximum loan amount you're eligible for.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-red-800">
              <AccordionTrigger className="text-red-600">What happens to my two-wheeler during the loan period?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Your two-wheeler will be securely stored in our designated parking facility. We ensure its safety and proper maintenance throughout the loan period. Our storage facilities are equipped with 24/7 security and protection against environmental factors to keep your vehicle in the same condition as when you pledged it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-red-800">
              <AccordionTrigger className="text-red-600">Can I repay the loan early?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, you can repay the loan at any time before the due date. We do not charge any prepayment penalties, so you can clear your loan whenever you're ready. Early repayment can help you save on interest charges and get your vehicle back sooner.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-red-800">
              <AccordionTrigger className="text-red-600">How long does the loan approval process take?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Our loan approval process is quick and efficient. In most cases, you can get approval within 30 minutes to an hour, provided all required documents are in order. We understand the importance of timely financial assistance and strive to make the process as swift as possible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-red-800">
              <AccordionTrigger className="text-red-600">Do you check credit scores?</AccordionTrigger>
              <AccordionContent className="text-gray-700">
                No, we do not perform credit checks. Our loans are based on the value of your two-wheeler, making it easier for you to get financial assistance regardless of your credit history. This makes our two-wheeler pledge loans an excellent option for those who may have difficulty obtaining traditional loans due to credit issues.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-red-600">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-4">
            If you're in need of quick financial assistance and own a two-wheeler, our pledge loan service could be the perfect solution for you. With competitive rates, a simple application process, and fast approval, we're here to help you overcome your financial challenges.
          </p>
          <Card className="bg-red-900 text-white border-red-800">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2 text-white">Apply for a Two-Wheeler Pledge Loan Today</h3>
                  <p className="text-gray-200">Experience quick approval, competitive rates, and flexible terms with Shree Lakshmi Pawn Brokers</p>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-red-900 hover:bg-gray-200" onClick={openPopup}>
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-900 py-12 border-t border-red-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-600">About Shree Lakshmi Pawn Brokers</h3>
              <p className="text-sm text-gray-700">Shree Lakshmi Pawn Brokers offers hassle-free vehicle financing solutions for bikes and two-wheelers with competitive rates and quick approvals in Bangalore. With years of experience, we've become a trusted name in two-wheeler pledge loans, providing our customers with reliable and efficient financial services.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-600">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-gray-700 hover:text-red-500 transition-colors">Home</Link></li>
                <li><Link href="#" className="text-sm text-gray-700 hover:text-red-500 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-sm text-gray-700 hover:text-red-500 transition-colors">Services</Link></li>
                <li><Link href="#" className="text-sm text-gray-700 hover:text-red-500 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-600">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-700 hover:text-red-500 transition-colors">Two-Wheeler Pledge Loan</Link></li>
                <li><Link href="#" className="text-sm text-gray-700 hover:text-red-500 transition-colors">Scooter Pledge Loan</Link></li>
                <li><Link href="#" className="text-sm text-gray-700 hover:text-red-500 transition-colors">Car Pledge Loan</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-600">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <Phone className="h-4 w-4 mr-2 text-red-500" /> +91-9741207790
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <Mail className="h-4 w-4 mr-2 text-red-500" /> shreelakshmipawnbroker@gmail.com
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" /> 1372/C, 32nd E Cross Rd, 4th T Block East, Jayanagar, Bengaluru, Karnataka 560041
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-red-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-700">&copy; {new Date().getFullYear()} Shree Lakshmi Pawn Brokers. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="text-gray-700 hover:text-red-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-700 hover:text-red-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-700 hover:text-red-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-700 hover:text-red-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-red-600">Apply for a Loan</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" required />
                </div>
                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={closePopup}>Cancel</Button>
                  <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}