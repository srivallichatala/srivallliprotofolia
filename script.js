// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll(".progress-bar")
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent")
        bar.style.width = percent + "%"
      })
    }
  
    // Animate skill bars on page load
    setTimeout(animateSkillBars, 500)
  
    // Sticky header on scroll
    const header = document.querySelector("header")
    let scrollPosition = window.scrollY
  
    function handleScroll() {
      scrollPosition = window.scrollY
  
      if (scrollPosition > 100) {
        header.style.padding = "5px 0"
        header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
      } else {
        header.style.padding = "20px 0"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
    }
  
    window.addEventListener("scroll", handleScroll)
  
    // Form submission handling
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message (in a real application)
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for header height
            behavior: "smooth",
          })
        }
      })
    })
  
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".project-card, .skill-card, .timeline-item")
  
    function revealOnScroll() {
      const windowHeight = window.innerHeight
  
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
  
        if (elementTop < windowHeight - 100) {
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }
      })
    }
  
    // Set initial styles for reveal elements
    revealElements.forEach((element) => {
      element.style.opacity = "0"
      element.style.transform = "translateY(20px)"
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Call revealOnScroll on page load and scroll
    window.addEventListener("scroll", revealOnScroll)
    window.addEventListener("load", revealOnScroll)
  })
  