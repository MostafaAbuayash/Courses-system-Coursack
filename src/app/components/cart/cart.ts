import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Interface for course structure
export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number; // Price in dollars
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // FormsModule for ngModel
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {
  // Array to store courses in the cart
  courses: Course[] = [
    { id: 1, title: 'Introduction to Angular', description: 'Learn the basics of Angular framework.', image: 'angular.png', price: 49.99 },
    { id: 2, title: 'Advanced TypeScript', description: 'Deep dive into TypeScript features and best practices.', image: 'typescript.png', price: 59.99 },
    { id: 3, title: 'Web Development with HTML & CSS', description: 'Build responsive websites using HTML and CSS.', image: 'html.png', price: 39.99 },
    { id: 4, title: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript.', image: 'js.png', price: 44.99 },
    { id: 5, title: 'React Basics', description: 'Start building interfaces using React.', image: 'react.png', price: 54.99 },
    { id: 6, title: 'Node.js API Development', description: 'Build back-end services using Node.js.', image: 'node.png', price: 64.99 },
    { id: 7, title: 'MongoDB for Beginners', description: 'Learn NoSQL with MongoDB.', image: 'mongo.png', price: 49.99 },
    { id: 8, title: 'SQL Masterclass', description: 'Write efficient SQL queries.', image: 'sql.png', price: 54.99 },
  ];

  // Payment status
  isProcessing: boolean = false;
  paymentSuccess: boolean = false;
  showPaymentForm: boolean = false;

  // Payment form data
  paymentMethod: string = 'credit-card';
  cardNumber: string = '';
  cardHolderName: string = '';
  expiryDate: string = '';
  cvv: string = '';
  billingAddress: string = '';
  city: string = '';
  zipCode: string = '';
  country: string = '';

  // Form validation errors
  formErrors: any = {};

  constructor() {}

  ngOnInit(): void {
    // Cart initialization logic can go here
    // For now, we'll just display all courses
  }

  // Method to remove a course from cart
  removeCourse(courseId: number): void {
    this.courses = this.courses.filter(c => c.id !== courseId);
  }

  // Method to get total number of courses in cart
  get cartItemCount(): number {
    return this.courses.length;
  }

  // Calculate total price of all courses in cart
  get totalPrice(): number {
    return this.courses.reduce((sum, course) => sum + course.price, 0);
  }

  // Format price for display
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  // Open payment form
  openPaymentForm(): void {
    if (this.courses.length === 0) {
      alert('Your cart is empty! Add courses before checkout.');
      return;
    }
    this.showPaymentForm = true;
    this.paymentSuccess = false;
  }

  // Close payment form
  closePaymentForm(): void {
    this.showPaymentForm = false;
    this.formErrors = {};
    // Reset form fields
    this.cardNumber = '';
    this.cardHolderName = '';
    this.expiryDate = '';
    this.cvv = '';
    this.billingAddress = '';
    this.city = '';
    this.zipCode = '';
    this.country = '';
  }

  // Validate payment form
  validateForm(): boolean {
    this.formErrors = {};

    if (this.paymentMethod === 'credit-card') {
      if (!this.cardNumber || this.cardNumber.replace(/\s/g, '').length < 16) {
        this.formErrors.cardNumber = 'Please enter a valid card number';
      }
      if (!this.cardHolderName || this.cardHolderName.length < 3) {
        this.formErrors.cardHolderName = 'Please enter cardholder name';
      }
      if (!this.expiryDate || !/^\d{2}\/\d{2}$/.test(this.expiryDate)) {
        this.formErrors.expiryDate = 'Please enter valid expiry date (MM/YY)';
      }
      if (!this.cvv || this.cvv.length < 3) {
        this.formErrors.cvv = 'Please enter valid CVV';
      }
    }

    if (!this.billingAddress) {
      this.formErrors.billingAddress = 'Please enter billing address';
    }
    if (!this.city) {
      this.formErrors.city = 'Please enter city';
    }
    if (!this.zipCode) {
      this.formErrors.zipCode = 'Please enter zip code';
    }
    if (!this.country) {
      this.formErrors.country = 'Please enter country';
    }

    return Object.keys(this.formErrors).length === 0;
  }

  // Format card number with spaces
  formatCardNumber(event: any): void {
    let value = event.target.value.replace(/\s/g, '');
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    // Add space every 4 digits
    value = value.match(/.{1,4}/g)?.join(' ') || value;
    this.cardNumber = value;
  }

  // Format expiry date
  formatExpiryDate(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.expiryDate = value;
  }

  // Process payment and enroll in all courses
  processPayment(): void {
    // Validate form
    if (!this.validateForm()) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    // Set processing state
    this.isProcessing = true;
    this.paymentSuccess = false;

    // Simulate payment processing (in real app, this would be an API call)
    setTimeout(() => {
      // Process each course enrollment
      const enrolledCourses: string[] = [];
      
      this.courses.forEach(course => {
        enrolledCourses.push(course.title);
      });

      // Show success message
      const courseList = enrolledCourses.join('\n- ');
      const total = this.formatPrice(this.totalPrice);
      
      alert(
        `✅ Payment Successful!\n\n` +
        `Payment Method: ${this.paymentMethod === 'credit-card' ? 'Credit Card' : this.paymentMethod}\n` +
        `Card: ****${this.cardNumber.slice(-4)}\n\n` +
        `You have enrolled in:\n- ${courseList}\n\n` +
        `Total Paid: ${total}\n\n` +
        `Thank you for your purchase!`
      );

      // Clear the cart after successful payment
      this.courses = [];
      this.isProcessing = false;
      this.paymentSuccess = true;
      this.showPaymentForm = false;

      // Reset form
      this.closePaymentForm();

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.paymentSuccess = false;
      }, 5000);

    }, 2000); // Simulate 2 second processing time
  }
}
