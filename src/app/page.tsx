"use client";

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Flame, Users, Wine, Home } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="medium"
      background="circleGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="DuckBar"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="DuckBar"
          description="Authentic Ukrainian bar experience in the heart of the city. Traditional flavors, warm hospitality, local community."
          buttons={[
            { text: "Reserve Now", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144326922-s8tfzzt0.jpg"
          imageAlt="DuckBar Ukrainian bar interior"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="We bring authentic Ukrainian traditions to your table. From carefully selected local beers to traditional recipes passed down through generations, DuckBar is where heritage meets hospitality."
          features={[
            {
              icon: Flame,
              title: "Traditional Recipes",
              description: "Time-honored Ukrainian dishes and preparations that celebrate our cultural heritage and culinary roots."
            },
            {
              icon: Users,
              title: "Community First",
              description: "A gathering place for locals where everyone is welcome. We believe in building connections over shared meals."
            },
            {
              icon: Wine,
              title: "Local Selection",
              description: "Carefully curated selection of Ukrainian beers, wines, and spirits sourced from trusted regional producers."
            },
            {
              icon: Home,
              title: "Warm Atmosphere",
              description: "Cozy and welcoming ambiance that feels like home. Every corner designed for comfort and memorable moments."
            }
          ]}
        />
      </div>
      
      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Our Menu"
          description="Discover authentic Ukrainian flavors and premium beverage selection"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              brand: "Traditional Dishes",
              name: "Borscht",
              price: "8.50",
              rating: 5,
              reviewCount: "142",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144329918-ezcolgqc.jpg",
              imageAlt: "Ukrainian Borscht"
            },
            {
              id: "2",
              brand: "Beverages",
              name: "Ukrainian Beer Selection",
              price: "5.00-7.50",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144329225-68b7tip1.jpg",
              imageAlt: "Selection of Ukrainian beers"
            },
            {
              id: "3",
              brand: "Special Events",
              name: "Private Party Package",
              price: "Contact us",
              rating: 5,
              reviewCount: "34",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144330892-p5blkvee.jpg",
              imageAlt: "DuckBar guests celebrating"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Community Says"
          description="Real feedback from people who love DuckBar"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Yuri",
              handle: "@yuri_k",
              testimonial: "DuckBar feels like home. The food is authentic and the atmosphere is incredible. Best spot in the city.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144332853-kus4ug6o.jpg",
              imageAlt: "Portrait of Yuri"
            },
            {
              id: "2",
              name: "Maria",
              handle: "@maria_local",
              testimonial: "I bring all my friends here. The staff treats you like family and the Ukrainian beer selection is unbeatable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144333594-g8w8yk77.jpg",
              imageAlt: "Portrait of Maria"
            },
            {
              id: "3",
              name: "Ivan",
              handle: "@ivan_foodie",
              testimonial: "Finally found a place that honors our traditions properly. DuckBar is a gem in our community.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144334479-pfyfwm0h.jpg",
              imageAlt: "Portrait of Ivan"
            },
            {
              id: "4",
              name: "Sophia",
              handle: "@sophia_nights",
              testimonial: "The borscht is perfection and the hospitality is genuine. This is where memories are made.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144335236-ly9kczsu.jpg",
              imageAlt: "Portrait of Sophia"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable Ukrainian dining experience. Fill out the form below and we'll confirm your reservation."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Party size, date, and special requests...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/uploaded-1764144336033-at8eztj3.jpg"
          imageAlt="DuckBar cozy interior"
          mediaPosition="right"
          buttonText="Reserve Now"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="DuckBar"
          copyrightText="© 2025 DuckBar. Celebrating Ukrainian tradition locally."
          columns={[
            {
              title: "Hours",
              items: [
                { label: "Monday - Thursday: 5PM - Midnight", href: "" },
                { label: "Friday - Saturday: 5PM - 2AM", href: "" },
                { label: "Sunday: 6PM - Midnight", href: "" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Phone: (555) 123-4567", href: "" },
                { label: "Email: hello@duckbar.local", href: "" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}